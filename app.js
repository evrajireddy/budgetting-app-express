// Dependencies
const express = require("express");
const cors = require("cors");

// Configuration
const app = express();

//TO SUPPORT POST
app.use(express.json())
//TO ENABLE CORS
app.use(cors());

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
