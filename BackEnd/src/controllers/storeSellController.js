const Store = require("../models/storeSellSchema"); // Adjust the path as needed

// Helper function to get the date part of a timestamp in YYYY-MM-DD format
const getDateWithoutTime = (date) => {
  const offset = date.getTimezoneOffset() * 60000;
  const localDate = new Date(date.getTime() - offset);
  localDate.setUTCHours(0, 0, 0, 0); // Set time to 00:00:00 UTC
  return localDate;
};

// Add products with the current date (without time) to a store
exports.sellProductsToStore = async (req, res) => {
  const { storeName, productsIdArray } = req.body;

  try {
    // Generate the current date without time
    const currentDate = getDateWithoutTime(new Date());

    // Find the store by name
    let store = await Store.findOne({ storeName });

    if (!store) {
      // If the store doesn't exist, create a new one
      store = new Store({
        storeName,
        productByTimestamp: [{ timestamp: currentDate, products }],
      });
    } else {
      // If the store exists, find today's entry in the productByTimestamp array
      let todayEntry = store.productByTimestamp.find((entry) => {
        // Compare dates without time part
        return (
          getDateWithoutTime(entry.timestamp).getTime() ===
          currentDate.getTime()
        );
      });

      if (!todayEntry) {
        // If today's entry doesn't exist, add a new entry
        store.productByTimestamp.push({ timestamp: currentDate, products });
      } else {
        // If today's entry exists, update the products
        products.forEach((newProduct) => {
          let existingProduct = todayEntry.products.find(
            (product) => product.productId === newProduct.productId
          );

          if (existingProduct) {
            // If the product exists, update the quantity
            existingProduct.quantity += newProduct.quantity;
          } else {
            // If the product doesn't exist, add the new product
            todayEntry.products.push(newProduct);
          }
        });
      }
    }

    // Save the store to the database
    const savedStore = await store.save();
    res.status(201).json(savedStore);
  } catch (err) {
    console.error("Error adding products to store:", err);
    res.status(500).json({ error: err.message });
  }
};

// UPDATE PRODUCT QUANTITY IN STORE BY PRODUCT ID AFTER SELL
exports.updateProductQuantity = async (req, res) => {
  const { productIdArray, toUpdateProductQuantityArray, storeName } = req.body;

  try {
    const store = await Store.findOne({ storeName: storeName.toUpperCase() });
    if (!store) {
      return res.status(404).json({ message: "Store not found" });
    }

    // Loop through the productIdArray to update each product's quantity
    for (let i = 0; i < productIdArray.length; i++) {
      const productId = productIdArray[i];
      const quantity = toUpdateProductQuantityArray[i];

      const product = store.products.id(productId);
      if (!product) {
        return res
          .status(404)
          .json({ message: `Product with ID ${productId} not found` });
      }

      // Update the product's quantity
      product.quantity = quantity;
    }

    await store.save();
    res.status(200).json("Quantity Updated Successfully");
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Other controller functions remain unchanged
