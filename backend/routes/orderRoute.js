const express = require("express");
const router = express.Router();

const { create, index } = require("../controller/orderController");
const { verifyToken } = require("../middlewares/verifyToken");
const { OrdersModel } = require("../model/OrdersModel");

router.post("/create", verifyToken, create);
router.get("/index", verifyToken, index);

router.get("/", async (req, res) => {
    try {
      const orders = await OrdersModel.find({});
      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json({ message: "Failed to fetch orders", error: err.message });
    }
  });
  
  module.exports = router;