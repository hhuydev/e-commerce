const express = require("express");
const { addOrderItems } = require("../controller/OrderController");

const router = express.Router();

router.post("/create-order", addOrderItems);

module.exports = router;
