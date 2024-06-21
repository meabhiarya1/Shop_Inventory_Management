const Product = require("../models/productSchema");

// CREATE PRODUCT
exports.createProduct = async (req, res) => {
  const product = new Product({
    brand: req.body.brand,
    category: req.body.category,
    type: req.body.type,
    store: req.body.store,
    quantity: req.body.quantity,
    size: req.body.size,
  });
  try {
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// GET ALL PRODUCTS
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
};

// GET SINGLE PRODUCT BY ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE PRODUCT THROUGH ID
exports.updateProduct = async (req, res) => {
  const id = req.params.id;
  const toUpdateProduct = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      toUpdateProduct,
      {
        new: true,
      }
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE THE PRODDUCT THROUGH ID
exports.deleteProduct = async (req, res) => {
    try {
      const product = await Product.findByIdAndDelete(req.params.id);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.status(200).json({ message: 'Product Deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };