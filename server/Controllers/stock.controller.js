const Stock = require("../Models/Stocks.schema");

const addStock = async (req, res) => {
    try {
        const {
            date,
            symbol,
            name,
            currency,
            stockExchange,
            exchangeShortName,
            close,
            high,
            low,
            open,
            volume
        } = req.body;

        const stock = new Stock({
            date,
            symbol,
            name,
            currency,
            stockExchange,
            exchangeShortName,
            close,
            high,
            low,
            open,
            volume
        });

        await stock.save();

        res.status(200).json({ message: "Stock added successfully", data: stock });
        console.log("Stock added successfully");

    } catch (error) {
        res.status(400).json({ error: error.message });
        console.error(error);
    }
};

const getAllStocks = async (req, res) => {
    try {
        const allStocks = await Stock.find();

        if (allStocks.length === 0) {
            return res.status(404).json({ error: "Stocks not found" });
        } else {
            res
                .status(200)
                .json({ message: "Stocks found successfully", data: allStocks });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
        console.error(error);
    }
};

const getStockById = async (req, res) => {
    try {
        const stockId = req.params.id;
        const stock = await Stock.findById(stockId);

        if (!stock) {
            return res.status(404).json({ error: "Stock not found" });
        } else {
            res
                .status(200)
                .json({ message: "Stock found successfully", data: stock });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
        console.error(error);
    }
};

const getStocksByExchange = async (req, res) => {
    try {
        const stockExchange = req.params.stockExchange;
        const stocks = await Stock.find({ stockExchange: stockExchange });

        if (stocks.length === 0) {
            return res.status(404).json({ error: `Stocks for ${stockExchange} not found` });
        } else {
            return res.status(200).json({ message: `Stocks for ${stockExchange} found successfully`, data: stocks });
        }
    } catch (error) {
        console.error(error);
        return res.status(400).json({ error: error.message });
    }
};

module.exports = { addStock, getAllStocks, getStockById, getStocksByExchange };
