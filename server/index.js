const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routes = require("./Routes/index.routes");
const cors = require("cors");
const bodyParser = require("body-parser");

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


app.listen(PORT, () => {
    console.log(`Server Running on Port: ${PORT}`);
});