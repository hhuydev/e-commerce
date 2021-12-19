const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  if (process.env.NODE_ENV === "test") {
    return jwt.sign({ id }, "testing", {
      expiresIn: "1h",
    });
  } else {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
  }
};

module.exports = generateToken;
