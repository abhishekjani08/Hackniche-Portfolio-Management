// const Student = require("../Schema/Student");
// const CustomError = require("../utils/error");
const Portfolio = require("../Models/Portfolio.schema");

// Create Portfolio
const createPortfolio = async (req, res, next) => {
  try {
    const { portfolioName, totalValue, userId } = req.body;

    const portfolio = new Portfolio({
      portfolioName,
      totalValue,
      userId,
    });

    await portfolio.save();

    res
      .status(200)
      .json({ message: "Portfolio created successfully", data: portfolio });
    console.log("Portfolio created successfully");
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.error(error);
  }
};

// Get All Portfolios
const getAllPortfolios = async (req, res, next) => {
  try {
    const portfolios = await Portfolio.find();

    if (portfolios.length === 0) {
      return res.status(404).json({ error: "Portfolios not found" });
    } else {
      res
        .status(200)
        .json({ message: "Portfolios found successfully", data: portfolios });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.error(error);
  }
};

// Get Portfolio by ID
const getPortfolioById = async (req, res, next) => {
  try {
    const portfolioId = req.params.id;
    const portfolio = await Portfolio.findById(portfolioId);

    if (!portfolio) {
      return res.status(404).json({ error: "Portfolio not found" });
    } else {
      res
        .status(200)
        .json({ message: "Portfolio found successfully", data: portfolio });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.error(error);
  }
};

module.exports = { createPortfolio, getAllPortfolios, getPortfolioById };
