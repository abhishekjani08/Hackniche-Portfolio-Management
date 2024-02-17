const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PortfolioSchema = new Schema(
  {
    portfolioName: {
      type: String,
      required: [true, "Portfolio Name is required"],
    },
    totalValue: {
      // Even /Odd
      type: Number,
      required: [true, "Portfolio Name is required"],
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Portfolio = mongoose.model("Portfolio", PortfolioSchema);

module.exports = Portfolio;
