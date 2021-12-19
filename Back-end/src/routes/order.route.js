const express = require("express");
const {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
  getOrders,
  updateOrderToDeliver,
} = require("../controller/OrderController");
const { auth, adminAuth } = require("../middelwares/auth");

const router = express.Router();

router.route("/").post(auth, addOrderItems).get(auth, adminAuth, getOrders);
router.route("/myorder").get(auth, getMyOrders);
router.route("/:id").get(auth, getOrderById);
router.route("/:id/pay").put(auth, updateOrderToPaid);
router.route("/:id/deliver").put(auth, adminAuth, updateOrderToDeliver);

module.exports = router;
