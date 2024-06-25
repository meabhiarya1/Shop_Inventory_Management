const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the schema for products
const productQuantitySchema = new Schema({
  productId: { type: String, required: true },
  quantity: { type: Number, required: true },
}, { _id: false });

const timestampedProductsSchema = new Schema({
  timestamp: { type: Date, required: true, default: Date.now },
  products: [productQuantitySchema]
}, { _id: false });

const storeSchema = new Schema({
  storeName: { type: String, required: true, unique: true },
  productByTimestamp: [timestampedProductsSchema]
});

const Store = mongoose.model("Store_Sell", storeSchema);
module.exports = Store;

