const Store = require("../models/storeBuySchema"); // Adjust the path as needed

// CREATE PRODUCT WITH STORE NAME
exports.createProduct = async (req, res) => {
  const { Brand, Category, Type, Quantity, StoreDetails, Size } = req.body;

  const newProduct = {
    brand: Brand.inputvalue
      ? Brand.inputvalue.toUpperCase()
      : Brand.selectedType.toUpperCase(),
    category: Category.inputvalue
      ? Category.inputvalue.toUpperCase()
      : Category.selectedType.toUpperCase(),
    type: Type.inputvalue
      ? Type.inputvalue.toUpperCase()
      : Type.selectedType.toUpperCase(),
    quantity: parseInt(Quantity, 10),
    height: Number(Size.H),
    width: Number(Size.W),
    thickness: Number(Size.B),
    weight: Number(Size.WT),
  };

  const StoreDetailsData =
    StoreDetails.inputvalue !== ""
      ? StoreDetails.inputvalue
      : StoreDetails.selectedType;

  try {
    // Find the store by storeName and add the product
    const store = await Store.findOne({
      storeName: StoreDetailsData.toUpperCase(),
    });

    if (!store) {
      // If the store does not exist, create a new store document with the product
      const newStore = new Store({
        storeName: StoreDetailsData.toUpperCase(),
        products: [newProduct],
      });
      await newStore.save();
      return res.status(201).json(newStore);
    } else {
      const existingProduct = store.products.find((product) => {
        if (
          product.brand === Brand.selectedType.toUpperCase() &&
          product.category === Category.selectedType.toUpperCase() &&
          product.type === Type.selectedType.toUpperCase() &&
          Number(product.height) === Number(Size.H) &&
          Number(product.width) === Number(Size.W) &&
          Number(product.thickness) === Number(Size.B) &&
          Number(product.weight) === Number(Size.WT)
        ) {
          return product;
        }
      });

      if (existingProduct) {
        // If the product exists, update the quantity
        existingProduct.quantity += parseInt(Quantity, 10);
      } else {
        // If the product does not exist, add the new product to the products array
        store.products.push(newProduct);
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

// GET ALL DETAILS BRAND CATEGORY TYPE STORENAME
exports.getAllProductsDetails = async (req, res) => {
  try {
    const storeData = await Store.find();

    // Helper function to extract unique values for a given property from the products array
    const extractUniqueValues = (property) => {
      return Array.from(
        new Set(
          storeData.flatMap((data) => {
            return data.products.map((productData) => productData[property]);
          })
        )
      );
    };

    // Extract unique store names
    const storeNameArray = storeData.map((data) => data.storeName);

    // Extract unique brand, category, and type names
    const brandNameArray = extractUniqueValues("brand");
    const categoryNameArray = extractUniqueValues("category");
    const typeNameArray = extractUniqueValues("type");

    res.status(200).json({
      storeNames: storeNameArray,
      brandNames: brandNameArray,
      categoryNames: categoryNameArray,
      typeNames: typeNameArray,
    });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while fetching product details.",
      error: error.message,
    });
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
