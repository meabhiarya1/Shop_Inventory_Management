const { validationResult } = require("express-validator");
const Store = require("../models/storeBuySchema"); // Adjust the path as needed

// CREATE PRODUCT WITH STORE NAME
exports.createProduct = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { storeName, brand, category, type, quantity, size } = req.body;

  const newProduct = {
    brand,
    category,
    type,
    quantity: parseInt(quantity, 10),
    size,
  };

  try {
    // Find the store by storeName and add the product
    const store = await Store.findOne({ storeName: storeName.toUpperCase() });

    if (!store) {
      // If the store does not exist, create a new store document with the product
      const newStore = new Store({
        storeName: storeName.toUpperCase(),
        products: [newProduct],
      });
      await newStore.save();
      return res.status(201).json(newStore);
    } else {
      const existingProduct = store.products.find(
        (product) =>
          product.brand === brand &&
          product.category === category &&
          product.type === type &&
          product.size === size
      );

      if (existingProduct) {
        // If the product exists, update the quantity
        existingProduct.quantity += parseInt(quantity, 10);
      } else {
        // If the product does not exist, add the new product to the products array
        store.products.push({
          brand,
          category,
          type,
          quantity: parseInt(quantity, 10),
          size,
        });
      }
      await store.save();
      return res.status(201).json(store);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET ALL PRODUCTS FROM ALL STORES
exports.getAllProducts = async (req, res) => {
  try {
    const stores = await Store.find();
    res.status(200).json(stores);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET PRODUCTS BY STORE NAME
exports.getAllProductsByStoreName = async (req, res) => {
  try {
    const store = await Store.findOne({
      storeName: req.params.storeName.toUpperCase(),
    });
    if (!store) {
      return res.status(404).json({ message: "Store not found" });
    }
    res.status(200).json(store.products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET SINGLE PRODUCT BY ID
exports.getProductByIdAndStoreName = async (req, res) => {
  const { storeName, productId } = req.params;

  try {
    const store = await Store.findOne({ storeName: storeName.toUpperCase() });
    if (!store) {
      return res.status(404).json({ message: "Store not found" });
    }

    const product = store.products.id(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}; 

// UPDATE PRODUCT IN STORE BY PRODUCT ID
exports.updateProduct = async (req, res) => {
  const { storeName, productId } = req.params;
  const toUpdateProduct = req.body;

  try {
    const store = await Store.findOne({ storeName: storeName.toUpperCase() });
    if (!store) {
      return res.status(404).json({ message: "Store not found" });
    }

    const product = store.products.id(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    Object.assign(product, toUpdateProduct);
    await store.save();
    res.status(200).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE PRODUCT FROM STORE BY PRODUCT ID
exports.deleteProduct = async (req, res) => {
  const { storeName, productId } = req.params;

  try {
    const store = await Store.findOne({ storeName: storeName.toUpperCase() });
    if (!store) {
      return res.status(404).json({ message: "Store not found" });
    }

    const product = store.products.id(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Remove the product from the store's products array using pull
    store.products.pull({ _id: productId });
    // Save the updated store document to the database
    await store.save();

    // Respond with a success message
    res.status(200).json({ message: "Product deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


