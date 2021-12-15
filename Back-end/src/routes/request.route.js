const express = require("express");
const { createRequest } = require("../controller/RequestController");
const router = express.Router();

router.post("/newseller", createRequest);

module.exports = router;
