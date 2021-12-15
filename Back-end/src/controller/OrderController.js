const asyncHandler = require("express-async-handler");
const Order = require("../model/Order");
const Product = require("../model/Product");

// @desc    Create new order
// @route   POST /api/order
// @access  Private
const addOrderItems = asyncHandler(async (req, res) => {});
module.exports = { addOrderItems };
