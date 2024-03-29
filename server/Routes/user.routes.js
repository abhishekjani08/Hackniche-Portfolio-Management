const express = require("express");
const router = express.Router();
const authController = require("../Controllers/auth.controller");

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.get("/getAllUsers", authController.getAllUsers);

module.exports = router;
