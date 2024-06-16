const app = require("express")();
const port = process.env.PORT || 4000;
require("./db/conn");

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`Server is running port no : ${port}`);
});
