const { Schema } = require("mongoose");

const OrdersSchema = new Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String,
  user: { type: String, required: true }, // Add user field
});

module.exports = { OrdersSchema };