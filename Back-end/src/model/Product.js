const mongoose = require("mongoose");
const mongooseAlgolia = require("mongoose-algolia");

const ReviewSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    rating: {
      type: Number,
      require: true,
    },
    comment: {
      type: String,
      require: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const ProductSchema = mongoose.Schema(
  {
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "User",
    },
    name: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
    brand: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    reviews: [ReviewSchema],
    // Average rating
    rating: {
      type: Number,
      require: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      require: true,
      default: 0,
    },
    price: {
      type: Number,
      require: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      require: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

if (process.env.NODE_ENV != "test") {
  ProductSchema.plugin(mongooseAlgolia, {
    appId: process.env.ALGOLIA_APP_ID,
    apiKey: process.env.ALGOLIA_API_KEY,
    indexName: "technology", //The name of the index in Algolia, you can also pass in a function
    debug: true,
  });
}

const Product = mongoose.model("Product", ProductSchema);

if (process.env.NODE_ENV != "test") {
  Product.SyncToAlgolia();
  Product.SetAlgoliaSettings({
    searchableAttributes: ["name", "brand", "category", "description", "price"],
    attributesForFaceting: ["category", "brand", "price"],
  });
}

module.exports = Product;
