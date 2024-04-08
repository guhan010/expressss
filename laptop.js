import express from "express";

 const router = express.Router();

router.get("/alienware", (req, res) => {
  res.send("Details about Alienware");
});

router.get("/macbook", (req, res) => {
  res.send("Details about Macbook");
});

router.get("/ideapad", (req, res) => {
  res.send("Details about Lenovo IdeaPad");
});

router.get("/rogstrix", (req, res) => {
  res.send("Details about Asus Rogstrix");
});
export default router