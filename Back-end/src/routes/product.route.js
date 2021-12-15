const express = require("express");
const { getProductsForSeller } = require("../controller/ProductController");

const router = express.Router();

router.get("/seller", getProductsForSeller);

module.exports = router;
