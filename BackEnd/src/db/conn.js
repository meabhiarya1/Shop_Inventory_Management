const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("../models/userSchema");
const Store = require("../models/storeBuySchema")

dotenv.config();

const DB = process.env.DATABASE;

// mongoose.set("debug", false);

mongoose
  .connect(DB)
  .then(async () => {
    console.log("Connection Successful");

    // try {
    //   // Drop the collection if it exists
    //   await Store.collection.drop();
    //   console.log('Store collection dropped');
    // } catch (err) {
    //   if (err.code === 26) {
    //     console.log('Namespace %s not found', Store.collection.name);
    //   } else {
    //     console.error('Error dropping Store collection:', err);
    //   }
    // }

    // Check if admin exists
    const adminUsername = process.env.ADMIN_USERNAME;
    const adminPassword = process.env.ADMIN_PASSWORD;

    const admin = await User.findOne({ username: adminUsername });

    if (!admin) {
      // Create the admin user if it doesn't exist
      await User.create({
        username: adminUsername,
        password: adminPassword, // Plain-text password
        role: "admin",
      });
      console.log("Admin user created");
    } else {
      console.log("Admin user already exists");
    }
  })
  .catch((error) => {
    console.log("Database connection error:", error);
  });
