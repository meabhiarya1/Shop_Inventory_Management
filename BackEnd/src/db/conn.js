const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const DB = process.env.DATABASE;
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((error) => {
    console.log(error);
  });

// moongoose
//   .connect("mongodb://localhost:27017/Shop_Inventory", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//   })
//   .then(() => {
//     console.log("connection successful");
//   })
//   .catch((error) => {
//     console.log(error);
//   });
