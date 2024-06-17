const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const { login, passwordChange } = require("../controllers/authController");

// Login Route
router.post("/login", login);


// Password Change Route
router.post(
  "/passwordchange",
  [
    body("id").isMongoId().withMessage("Invalid user ID"),
    body("newPassword")
      .isLength({ min: 5 })
      .withMessage("Password must be at least 5 characters long"),
  ],
  passwordChange
);

module.exports = router;
