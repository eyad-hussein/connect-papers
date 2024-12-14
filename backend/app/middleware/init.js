const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

// Error handler middleware
// const errorHandler = require("./ErrorHandlerMiddleware");

// Initialize middleware
module.exports = function (app) {
  // Common middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(morgan("tiny"));
  app.use(helmet());
  app.use(cors());

  // Error handling middleware
  //   app.use(errorHandler);
};
