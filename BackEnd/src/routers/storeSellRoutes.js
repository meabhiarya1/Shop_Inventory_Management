const express = require("express");
const router = express.Router();
const { addProductsToStore } = require("../controllers/storeSellController");

router.post("/sell/products", addProductsToStore);

module.exports = router;
