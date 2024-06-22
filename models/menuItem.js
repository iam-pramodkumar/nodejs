const mongoose = require("mongoose");

const menuItemSechma = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  taste: {
    type: String,
    enum: ["sweet", "sour", "spicy"],
    required: true,
  },
  is_drink: {
    type: Boolean,
    default: false,
  },
  ingredient: {
    type: [String],
    default: [],
  },
  num_sales: {
    type: Number,
  },
});
const MenuItem = mongoose.model("MenuItem", menuItemSechma);
module.exports = MenuItem;
