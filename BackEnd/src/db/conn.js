const moongoose = require("moongoose");

moongoose
  .connect("mongodb://localhost:27017/Shop_Inventory", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("connection successful");
  })
  .catch((error) => {
    console.log(error);
  });
