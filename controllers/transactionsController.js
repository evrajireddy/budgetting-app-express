const express = require("express");
const transactionsController = express.Router();
let transactions = require("../models/transaction.js");
//const transaction = require("../models/transaction.js");




// Index
transactionsController.get("/", (req, res) => {
  res.json(transactions);
});

// Show
transactionsController.get("/:id", (req, res) => {
  const { id } = req.params;
  const transaction = transactions.find((tran) => tran.id === Number(id));
  if (transaction) {
    res.send(transaction);
  } else {
    res.send("Cannot find any transaction with this id: " + id);
  }
});

//POST
transactionsController.post("/", (req, res) => {
  const newTransaction = {
    id: transactions.length + 1,
    date: req.body.date,
    item_name: req.body["item_name"],
    amount: req.body.amount,
    from: req.body.from,

  }
  transactions.push(newTransaction);
  res.json(transactions);
});


// DELETE
transactionsController.delete("/:id", (req, res) => {
  const { id } = req.params;
  const transactionsLength = transactions.length;
  transactions = transactions.filter(trans => trans.id != id);
  if (transactionsLength != transactions.length) {
    res.send("transaction with this id: " + id + " deleted successfully");
  } else {
    res.send("Cannot find any transaction with this id: " + id);
  }
});

//PUT
transactionsController.put("/:id", (req, res) => {
  const { id } = req.params;
  const transactionId = transactions.findIndex(trans => trans.id == id);
  if (transactionId == -1) {
    res.send("Cannot find any transaction with this id: " + id);
  }
  else {
    const newTransaction = {
      id: transactions.length + 1,
      date: req.body.date,
      item_name: req.body["item_name"],
      amount: req.body.amount,
      from: req.body.from,
  
    }
    transactions[transactionId].date = req.body.date;
    transactions[transactionId]["item_name"] = req.body["item_name"];
    transactions[transactionId].amount = req.body.amount;
    transactions[transactionId].from = req.body.from;

    res.send("transaction with this id: " + id + " updated successfully");
  }
});

module.exports = transactionsController;
