const { check } = require("express-validator");

const validateProduct = [
  check("storeName").not().isEmpty().withMessage("Store name is required"),
  check("brand").not().isEmpty().withMessage("Brand is required"),
  check("category").not().isEmpty().withMessage("Category is required"),
  check("type").not().isEmpty().withMessage("Type is required"),
  check("quantity")
    .isInt({ gt: 0 })
    .withMessage("Quantity must be a positive integer"),
  check("size").not().isEmpty().withMessage("Size is required"),
];

module.exports = validateProduct;
