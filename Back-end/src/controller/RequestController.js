const asyncHandler = require("express-async-handler");
const Request = require("../model/Request");
const User = require("../model/User");

const createRequest = asyncHandler(async (req, res) => {});

module.exports = { createRequest };
