const express = require("express");
const {
  signup,
  login,
  getUserProfile,
  getUserbyId,
  deleteUser,
  getUsers,
  updateUserbyId,
  updateUserprofile,
} = require("../controller/UserController");

const { auth, adminAuth } = require("../middelwares/auth");

const router = express.Router();
router.route("/profile").get(auth, getUserProfile).put(auth, updateUserprofile);
router.route("/login").post(login);
router.route("/register").post(signup);
router.route("/getusers").get(auth, adminAuth, getUsers);
router.route("/deleteUser/:id").delete(auth, adminAuth, deleteUser);
router.route("/updateUser/:id").put(auth, adminAuth, updateUserbyId);
router.route("/:id").get(auth, adminAuth, getUserbyId);

module.exports = router;
