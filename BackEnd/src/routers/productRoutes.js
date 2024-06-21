const express = require("express");
const router = express.Router();

const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

router.post("/products", createProduct);
router.put("/updateproduct/:id", updateProduct);
router.get("/products", getAllProducts);
router.get("/product/:id", getProductById);
router.delete("/product/:id", deleteProduct);

module.exports = router;
