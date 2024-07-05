// Dependencies
const express = require("express");
// const colors = require("./models/color");

// Configuration
const app = express();

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to my Express app");
});

const transactionsController = require("./controllers/transactionsController.js");
app.use("/transactions", transactionsController);

// 404 Page not found
app.get("*", (req, res) => {
  res.status(404).json({ error: "Page not found" });
});

// Export
module.exports = app;
