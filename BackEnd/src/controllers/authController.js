const User = require("../models/userSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

// Login Controller
const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(400).json({ error: "Invalid Username" });
    }

    // Compare the provided password with the hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    const token = await user.generateAuthToken();

    res.cookie("token", token, {
      expires: new Date(Date.now() + 2592000),
      httpOnly: true,
    });
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid Password" });
    }

    // Authentication successful
    res.json({ message: "Login successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// Password Change Controller
const passwordChange = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { newPassword, id } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Find the user by ID and update password using findByIdAndUpdate
    const user = await User.findByIdAndUpdate(
      id,
      { password: hashedPassword },
      { new: true }
    );

    if (!user) {
      return res.status(400).json({ error: "Invalid User" });
    }

    // Respond with a success message
    res.json({ message: "Password changed successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  login,
  passwordChange,
};
