require("dotenv").config();
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    console.error("No token provided or invalid format");
    return res.status(401).json({ error: "Token is required" });
  }

  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.TOKEN_KEY, (err, decoded) => { // Use TOKEN_KEY from .env
    if (err) {
      console.error("JWT verification error:", err.message);
      return res.status(401).json({ error: "Unauthorized" });
    }

    console.log("Decoded Token:", decoded); // Debugging log
    req.user = decoded;
    next();
  });
};

module.exports = { verifyToken };
