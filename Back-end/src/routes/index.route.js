const user = require("./user.route");
const product = require("./product.route");
const request = require("./request.route");
const order = require("./order.route");

const route = (app) => {
  app.use("/api/users", user);
  app.use("/api/products", product);
  app.use("/api/requests", request);
  app.use("/api/orders", order);
};
module.exports = route;
