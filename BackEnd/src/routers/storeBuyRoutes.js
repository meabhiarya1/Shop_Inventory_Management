const express = require("express");
const router = express.Router();
const validateProduct = require("../middleware/validationMiddleware");

const {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  getAllProductsByStoreName,
  getProductByIdAndStoreName,
} = require("../controllers/storeBuyController");

router.post("/products", validateProduct, createProduct);
router.put(
  "/updateproduct/store/:storeName/product/:productId",
  validateProduct,
  updateProduct
);

router.get("/product/store/:storeName/product/:productId", getProductByIdAndStoreName);
router.get("/products", getAllProducts);
router.get("/products/:storeName", getAllProductsByStoreName);
router.delete("/product/store/:storeName/product/:productId", deleteProduct);

module.exports = router;
