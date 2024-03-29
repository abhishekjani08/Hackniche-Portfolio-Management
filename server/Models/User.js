const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    userPassword: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("User", userSchema);