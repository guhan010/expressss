// methods of http requests

// get - recieve data from database
// post - is used to send new data
// put - is used to update old data
// delete - is used to delete old data

import express from "express";
import Users from "./model.js";

export const controller = express.Router();

controller.post("/users", async (req, res) => {
  try {
    const user = new Users(req.body);
    await user.save();
    res.status(200).json("data saved");
  } catch (error) {
    res.status(404).json(error);
  }
});

controller.get("/users", async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json(error);
  }
});

controller.get("/users/:id", async (req, res) => {
  try {
    const users = await Users.findById(req.params.id);
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json(error);
  }
});

controller.delete("/users/:id", async (req, res) => {
  try {
    const users = await Users.findByIdAndDelete(req.params.id);
    res.status(200).json("Id deleted");
  } catch (error) {
    res.status(404).json(error);
  }
});

// model.save - saving new data to database
// model.find - get data from database
// model.findById - get specific data from database
// model.findByIdAndUpdate - update specific data
// model.findByIdAndDelete - delete specific data

//body-parser is a middle used to fetch our body data
//exress have default body parser
//app.use(express.json())
