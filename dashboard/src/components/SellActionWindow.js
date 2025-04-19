import React, { useState, useContext } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";

import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css"; // You can change this to SellActionWindow.css if needed
import { Link } from "@mui/material";


const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const generalContext = useContext(GeneralContext);

  const handleSellClick = () => {
    axios.post("https://zerodha-backend-n16y.onrender.com/newOrder", {
      name: uid,
      qty: Number(stockQuantity),
      price: Number(stockPrice),
      mode: "SELL",
    })
    .then((response) => {
      console.log("Sell order placed successfully:", response.data);
      generalContext.closeSellWindow(); // Consider renaming this 
    })
    .catch((error) => {
      console.error("Error placing sell order:", error);
      // Handle error appropriately, e.g., show a notification to the user
    });

};

const handleCancelClick = () => {
  generalContext.closeSellWindow(); // Close the Sell window on cancel
  console.log("SellActionWindow UID:", uid); // Debugging log
};

  return (
    <div className="container" id="sell-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Estimated returns ₹{(stockQuantity * stockPrice).toFixed(2)}</span>
        <div>
          <Link className="btn btn-red" onClick={handleSellClick}>
            Sell
          </Link>
          <Link className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
