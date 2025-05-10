import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./ActionWindow.css";

const placeOrder = (uid, qty, price, mode) => {
  const token = localStorage.getItem("token");
  if (!token) {
    console.error("No token found in localStorage");
    return Promise.reject(new Error("Unauthorized: No token found"));
  }

  return axios.post(
    "http://localhost:3005/orders/create",
    { name: uid, qty, price, mode },
    {
      headers: { 
        Authorization: `Bearer ${token}`, // Include the token
        "Content-Type": "application/json" // Specify content type
      },
    }
  );
};

const ActionWindow = ({ uid, type, onClose }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { fetchOrders } = useContext(GeneralContext);

  const handleActionClick = () => {
    if (stockQuantity <= 0 || !Number.isInteger(Number(stockQuantity))) {
      setErrorMessage("Please enter a valid quantity (positive integer).");
      return;
    }

    if (stockPrice <= 0 || isNaN(stockPrice)) {
      setErrorMessage("Please enter a valid price (positive number).");
      return;
    }

    setIsLoading(true);
    setErrorMessage(""); // Reset error message

    placeOrder(uid, stockQuantity, stockPrice, type.toUpperCase())
      .then(() => {
        fetchOrders();
        onClose();
      })
      .catch((error) => {
        console.error("Order failed:", error.response?.data || error.message);
        setErrorMessage(`Failed to place ${type} order. Please try again.`);
      })
      .finally(() => {
        setIsLoading(false); // Reset loading state
      });
  };

  return (
    <div className="container">
      <div className={`header ${type === "buy" ? "header-buy" : "header-sell"}`}>
        <h3>
          {type === "buy" ? "Buy Order" : "Sell Order"} <span>({uid})</span>
        </h3>
      </div>
      <div className="inputs">
        <fieldset>
          <legend>Qty.</legend>
          <input
            type="number"
            onChange={(e) => setStockQuantity(e.target.value)}
            value={stockQuantity}
            min="1"
          />
        </fieldset>
        <fieldset>
          <legend>Price</legend>
          <input
            type="number"
            onChange={(e) => setStockPrice(e.target.value)}
            value={stockPrice}
            min="0.01"
            step="0.01"
          />
        </fieldset>
      </div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <div className="buttons">
        <button
          type="button"
          className={`btn ${type === "buy" ? "btn-blue" : "btn-red"}`}
          onClick={handleActionClick}
          disabled={isLoading}
        >
          {isLoading ? "Processing..." : type.charAt(0).toUpperCase() + type.slice(1)}
        </button>
        <button type="button" className="btn btn-grey" onClick={onClose} disabled={isLoading}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ActionWindow;
