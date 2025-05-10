const express = require("express");
const { index } = require("../controller/holdingsController"); // Ensure this matches the export in holdingsController.js
const { verifyToken } = require("../middlewares/verifyToken"); // Ensure verifyToken is a valid function

const router = express.Router();

// Define routes
router.get("/", verifyToken, index); // Ensure both verifyToken and index are valid functions

module.exports = router;