const mongoose = require("mongoose");
// const dotenv = require("dotenv");
const colors = require("colors");
const users = require("./data/users");
const products = require("./data/products");
const User = require("./src/model/User");
const Product = require("./src/model/Product");
const Order = require("./src/model/Order");
const connectDB = require("./db/db");

connectDB();

// dotenv.config();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    // Will fix these thing latter
    const createdUsers = await User.insertMany(users);
    const sellerUser = createdUsers[0]._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: sellerUser };
    });

    await Product.insertMany(sampleProducts);
    console.log("Data imported!!".green.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Data Destroy!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
