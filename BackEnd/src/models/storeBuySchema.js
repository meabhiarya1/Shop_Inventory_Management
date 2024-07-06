const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  brand: { type: String, required: true },
  category: { type: String, required: true },
  type: { type: String, required: true },
  quantity: { type: Number, required: true },
  height: { type: Number },
  width: { type: Number },
  thickness: { type: Number },
  weight: { type: Number },
});

const storeSchema = new Schema({
  storeName: { type: String, required: true, unique: true },
  products: [productSchema],
});

const Store = mongoose.model("Store_Buy", storeSchema);
module.exports = Store;
