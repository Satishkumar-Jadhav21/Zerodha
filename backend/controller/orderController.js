const { OrdersModel } = require("../model/OrdersModel");
const { UserModel } = require("../model/UserModel");

module.exports.create = async (req, res) => {
  try {
    const newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
      user: req.user.email,
    });

    const savedOrder = await newOrder.save();
    res.status(201).json({ status: "Order created successfully", order: savedOrder });
  } catch (error) {
    console.error("Error creating order:", error.message);
    res.status(500).json({ error: "Failed to create order" });
  }
};

module.exports.index = async (req, res) => {
  let user = await UserModel.findOne({ email: req.user.email }).populate("orders");
  res.json(user.orders);
};