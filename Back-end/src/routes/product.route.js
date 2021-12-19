const express = require("express");

const {
  getTrendingProducts,
  getTopProducts,
  getProductById,
  getProducts,
  createProductReview,
  deleteProduct,
  updatedProduct,
  createProduct,
  getProductsForSeller,
} = require("../controller/productController");
const { auth, sellerAndAdminAuth } = require("../middelwares/auth");

const router = express.Router();

router.route("/:id/reviews").post(auth, createProductReview);
router.route("/trending").get(getTrendingProducts);
router.route("/top").get(getTopProducts);
router.route("/seller").get(auth, getProductsForSeller);
router
  .route("/:id")
  .get(getProductById)
  .delete(auth, sellerAndAdminAuth, deleteProduct)
  .put(auth, sellerAndAdminAuth, updatedProduct);
router
  .route("/")
  .get(getProducts)
  .post(auth, sellerAndAdminAuth, createProduct);
module.exports = router;
