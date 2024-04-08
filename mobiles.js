import express from "express";

export const router = express.Router();
router.get("/", (req, res) => {
  res.send("Welcome to mobiles page ");
});
router.get("/samsungS23", (req, res) => {
  res.send("Details about Samsung S23");
});

router.get("/iphone15pro", (req, res) => {
  res.send("Details about Iphone 15 pro");
});

router.get("/nothing2", (req, res) => {
  res.send("Details about Nothing 2");
});

router.get("/oneplus12pro", (req, res) => {
  res.send("Details about Oneplus 12 pro");
});


