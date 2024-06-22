const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  brand: { type: String, required: true },
  category: { type: String, required: true },
  type: { type: String, required: true },
  quantity: { type: Number, required: true },
  size: { type: String, required: true },
});

const storeSchema = new Schema({
  storeName: { type: String, required: true, unique: true },
  products: [productSchema],
});

const Store = mongoose.model("Store", storeSchema);
module.exports = Store;
