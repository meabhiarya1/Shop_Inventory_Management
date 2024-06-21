const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  brand: { type: String, required: true },
  category: { type: String, required: true },
  type: { type: String, required: true },
  store: { type: String, required: true },
  quantity: { type: String, required: true },
  size: { type: String, required: true },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
