const express = require("express");
const router = express.Router();
// const { verifyToken, checkAdmin } = require("../middleware/auth.middleware"); // Fix import statement

const {
  addAsset,
  getAllAssets,
  getAssetByPortfolioId,
  getAsset,
  // getAllPortfolios,
  // getPortfolioById,
} = require("../Controllers/asset.controller.js");

router.post("/add", addAsset);
router.get("/getAll", getAllAssets);
router.get("/get/portfolio/:portfolioId", getAssetByPortfolioId);
router.get("/get/:id", getAsset);
module.exports = router;
