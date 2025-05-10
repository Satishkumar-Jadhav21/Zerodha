const express = require("express");
const router = express.Router();

const { create } = require("../controller/orderController");
const { verifyToken } = require("../middlewares/verifyToken");
const { OrdersModel } = require("../model/OrdersModel");

// Create a new order
router.post("/create", verifyToken, create);

// Get all orders of logged-in user
router.get("/", verifyToken, async (req, res) => {
  try {
    const orders = await OrdersModel.find({ user: req.user.email });
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch orders", error: err.message });
  }
});

module.exports = router;
