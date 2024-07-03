const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE;

mongoose
  .connect(DB)
  .then(() => console.log("Database has beeen connected successfuly"))
  .catch((err) => console.log(err));

const port = 3000;

app.listen(port, "127.0.0.1", () => {
  console.log(`your server is currently running on port: ${port}`);
});
