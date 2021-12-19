const express = require("express");
const {
  createRequest,
  getAllRequest,
  getRequestById,
  approveUserRequest,
} = require("../controller/requestController");

const { auth, adminAuth } = require("../middelwares/auth");
const router = express.Router();

router.route("/approve/:id").put(auth, adminAuth, approveUserRequest);
router.route("/newSeller").post(auth, createRequest);
router.route("/all").get(auth, adminAuth, getAllRequest);
router.route("/:id").get(auth, adminAuth, getRequestById);

module.exports = router;

module.exports = router;
