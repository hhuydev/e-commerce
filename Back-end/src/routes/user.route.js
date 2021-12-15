const express = require("express");
const { signup } = require("../controller/UserController");

const router = express.Router();

router.post("/register", signup);

module.exports = router;
