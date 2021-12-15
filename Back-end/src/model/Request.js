const mongoose = require("mongoose");

const RequestSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  description: {
    type: String,
    require: true,
  },
  approved: {
    type: Boolean,
    default: false,
    require: true,
  },
});

const Request = mongoose.model("Request", RequestSchema);

module.exports = Request;
