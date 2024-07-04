const express = require("express");
const router = express.Router();
const { sellProductsToStore } = require("../controllers/storeSellController");

router.post("/sell/products", sellProductsToStore);

module.exports = router;
