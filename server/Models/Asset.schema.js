const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const assetTypes = require("../utils/assetTypes");
const symbols = require("../utils/symbols");

//   "assetType": "Stock",
//   "symbol": "AAPL",
//   "quantity": 10,
//   "purchasePrice": 150,
//   "purchaseDate": "2023-01-01"
// }
const AssetSchema = new Schema(
  {
    assetType: {
      type: String,
      default: "Stock",
      enum: Object.values(assetTypes),

      required: [true, "assetType  is required"],
    },
    symbol: {
      type: String,
      enum: Object.values(symbols),
      required: [true, "Symbol  is required"],
    },
    quantity: {
      type: Number,
      required: [true, "Quantity  is required"],
    },
    portfolioId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Portfolio",
      required: [true, "Portfolio Id  is required"],
    },
    purchasePrice: {
      type: Number,
      required: [true, "Purchase price is required"],
    },
    purchaseDate: {
      type: Date,
      required: [true, "purchaseDate is required"],
    },
  },
  { timestamps: true }
);

const Asset = mongoose.model("Asset", AssetSchema);

module.exports = Asset;
