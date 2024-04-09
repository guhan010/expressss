import express from "express";
import { router } from "./mobiles.js";
import laproute from "./laptop.js";
import electroute from "./electronics.js";
import mongoose from "mongoose";
import { controller } from "./formController.js";

const app = express();
app.get("/", (req, res) => {
  res.send("Welcome to amazon like page");
});
app.use(express.json());
app.use("/api", controller);

mongoose
  .connect(
    "mongodb+srv://expressdb:dbpassword@cluster0.gqsrbw9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Db connected");
  })
  .catch((error) => console.log(error));

app.use("/mobiles", router);
app.use("/laptops", laproute);
app.use("/electronics", electroute);

app.listen(5000, () => {
  console.log("server connected");
});

// mongoose
// orm - object relational mapping
// in database you'll have an object
// in our backend we are going to create a model
// this model will be an object

// {
//   key: "value"
// }
