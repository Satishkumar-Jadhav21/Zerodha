const { HoldingsModel } = require("../model/HoldingsModel");

module.exports.index = async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.status(200).json(allHoldings);
  } catch (error) {
    console.error("Error fetching holdings:", error.message);
    res.status(500).json({ error: "Failed to fetch holdings" });
  }
};