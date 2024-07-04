const express = require("express");

const router = express.Router();

const {
  storeTotalSalesController,
} = require("../controllers/storeTotalSalesController");

router.get("/get/total/sales", storeTotalSalesController);

module.exports = router;
