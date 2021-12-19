const express = require("express");
const {
  getProductsForSeller,
  getProducts,
} = require("../controller/ProductController");

const router = express.Router();

router.get("/seller", getProductsForSeller);

router.get("/", getProducts);

module.exports = router;
