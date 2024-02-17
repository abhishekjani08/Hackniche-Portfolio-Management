const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routes = require("./Routes/index.routes");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");


const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

const PORT = process.env.PORT;
const DB = process.env.MONGO_URL;

try {
    mongoose.connect(DB);
    console.log('Connected to Database Successfully');
} catch (error) {
    console.log("Error Connecting to Database: ", error);
}

app.get("/", (req, res) => {
    res.send("Server is Running");
});

app.use("/api", routes);

// app.post('/api/getStockData', async (req, res) => {
//     try {
//         const { symbol } = req.query;
//         const response = await axios.get(`https://query1.finance.yahoo.com/v8/finance/chart/${symbol}`);
//         const data = response.data;

//         res.json(data);
//     } catch (error) {
//         console.error('Error fetching stock data:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });


app.listen(PORT, () => {
    console.log(`Server Running on Port: ${PORT}`);
});