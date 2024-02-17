const mongoose = require("mongoose");

const StockSchema = mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  symbol: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  stockExchange: {
    type: String,
    required: true,
  },
  exchangeShortName: {
    type: String,
    required: true,
  },
  close: {
    type: Number,
    required: true,
  },
  high: {
    type: Number,
    required: true,
  },
  low: {
    type: Number,
    required: true,
  },
  open: {
    type: Number,
    required: true,
  },
  volume: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Stocks", StockSchema);
