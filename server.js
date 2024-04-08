import express from "express";
import { router } from "./mobiles.js";
import laproute from "./laptop.js";
import electroute from "./electronics.js";

const app = express();
app.get("/", (req, res) => {
  res.send("Welcome to amazon like page");
});

app.use("/mobiles", router);
app.use("/laptops", laproute);
app.use("/electronics", electroute);

app.listen(5000);
