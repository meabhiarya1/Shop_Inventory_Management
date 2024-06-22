// const Product = require("../models/productSchema"); // Adjust the path as needed

// exports.createProduct = async (req, res) => {
//   // Check for validation errors
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }

//   // Destructure and validate input data
//   const { brand, category, type, store, quantity, size } = req.body;
//   if (!brand || !category || !type || !store || !quantity || !size) {
//     return res.status(400).json({ message: "All fields are required." });
//   }

//   // Create the product object
//   const product = new Product({
//     brand,
//     category,
//     type,
//     store,
//     quantity: parseInt(quantity, 10), // Ensure quantity is a number
//     size,
//   });

//   try {
//     // Save the product to the database
//     await product.save();
//     res.status(201).json(product);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// GET ALL PRODUCTS


// CREATE PRODUCT

// exports.getAllProducts = async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).json({ message: err.message });
//   }
// };

// GET SINGLE PRODUCT BY ID
// exports.getProductById = async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     if (!product) {
//       return res.status(404).json({ message: "Product not found" });
//     }
//     res.status(200).json(product);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// UPDATE PRODUCT THROUGH ID
// exports.updateProduct = async (req, res) => {
//   const id = req.params.id;
//   const toUpdateProduct = req.body;

//   try {
//     const updatedProduct = await Product.findByIdAndUpdate(
//       id,
//       toUpdateProduct,
//       {
//         new: true,
//       }
//     );
//     if (!updatedProduct) {
//       return res.status(404).json({ message: "Product not found" });
//     }
//     res.status(200).json(updatedProduct);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

// DELETE THE PRODDUCT THROUGH ID
// exports.deleteProduct = async (req, res) => {
//   try {
//     const product = await Product.findByIdAndDelete(req.params.id);
//     if (!product) {
//       return res.status(404).json({ message: "Product not found" });
//     }
//     res.status(200).json({ message: "Product Deleted" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };



// CREATE PRODUCT


