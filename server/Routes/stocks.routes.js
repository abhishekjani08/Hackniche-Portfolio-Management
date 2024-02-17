const express = require("express");
const router = express.Router();

const {
    addStock,
    getAllStocks,
    getStockById,
    getStocksByExchange,
} = require("../Controllers/stock.controller");

router.post("/add", addStock);
router.get("/getAll", getAllStocks);
router.get("/get/:id", getStockById);
router.get("/getByExchange/:stockExchange", getStocksByExchange);

module.exports = router;
