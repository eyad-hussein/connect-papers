// TODO: Set up foler structure
// TODO: Work on functionality for passing more than one pdf file
// TODO: Search what is the best way to cross match the references and to see which paper is referencing which
require("dotenv").config();

const express = require("express");
const mysql = require("mysql2");

const app = express();

const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Initialize middleware
require("./middleware/init")(app);

// Initialize routes
require("./routes/init")(app);

// Start server
app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});

// Export app
module.exports = app;

// import express from "express";
// import multer from "multer";
// import readPdf from "./app/utils/parser.mjs";

// const app = express();

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/");
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });

// const upload = multer({ storage: storage });

// app.post("/upload", upload.single("file"), async (req, res) => {
//   const file = req.file;

//   const data = await readPdf(file.path);

//   console.log(data);
//   res.send("File uploaded");
// });

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.listen(3000, function () {
//   console.log("Server is running on port 3000");
// });
