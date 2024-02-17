// const Student = require("../Schema/Student");
// const CustomError = require("../utils/error");
const Asset = require("../Models/Asset.schema");

// Create Portfolio
const addAsset = async (req, res, next) => {
  try {
    const {
      assetType,
      symbol,
      quantity,
      portfolioId,
      purchasePrice,
      purchaseDate,
    } = req.body;

    const asset = new Asset({
      assetType,
      symbol,
      quantity,
      portfolioId,
      purchasePrice,
      purchaseDate,
    });

    await asset.save();

    res.status(200).json({ message: "Asset added successfully", data: asset });
    console.log("Asset added successfully");
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.error(error);
  }
};

// Get All Portfolios
const getAllAssets = async (req, res, next) => {
  try {
    const allAsset = await Asset.find();

    if (allAsset.length === 0) {
      return res.status(404).json({ error: "Assets not found" });
    } else {
      res
        .status(200)
        .json({ message: "Assets found successfully", data: allAsset });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.error(error);
  }
};

// // Get Portfolio by ID
const getAsset = async (req, res, next) => {
  try {
    const assetId = req.params.id;
    const asset = await Asset.findById(assetId);

    if (!asset) {
      return res.status(404).json({ error: "Asset not found" });
    } else {
      res
        .status(200)
        .json({ message: "asset found successfully", data: asset });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.error(error);
  }
};
const getAssetByPortfolioId = async (req, res, next) => {
  try {
    const portfolioId = req.params.portfolioId;
    const asset = await Asset.find({
      portfolioId: portfolioId,
    });

    if (!asset) {
      return res.status(404).json({ error: "assets not found" });
    } else {
      res
        .status(200)
        .json({ message: "asset found successfully", data: asset });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.error(error);
  }
};

module.exports = { addAsset, getAllAssets, getAsset, getAssetByPortfolioId };
