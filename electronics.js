import express from "express";

const router = express.Router();

router.get("/tv", (req, res) => {
  res.send("Details about Television");
});

router.get("/fride", (req, res) => {
  res.send("Details about Fridge");
});

router.get("/wm", (req, res) => {
  res.send("Details about Washing Machine");
});

router.get("/ac", (req, res) => {
  res.send("Details about Aircooler");
});

export default router