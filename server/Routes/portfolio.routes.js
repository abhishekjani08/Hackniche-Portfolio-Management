const express = require("express");
const router = express.Router();
// const { verifyToken, checkAdmin } = require("../middleware/auth.middleware"); // Fix import statement

const {
  createPortfolio,
  getAllPortfolios,
  getPortfolioById,
} = require("../Controllers/portfolio.controller.js");

router.post("/add", createPortfolio);
router.get("/getAll", getAllPortfolios);
router.get("/get/:id", getPortfolioById);
module.exports = router;
