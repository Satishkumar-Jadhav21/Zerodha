import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const GeneralContext = createContext();

export const GeneralContextProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState(null);

  // Fetch orders from the backend
  const fetchOrders = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found in localStorage");
      return;
    }

    axios
      .get("http://localhost:3005/orders", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error.response?.data || error.message);
        setOrders([]); // Reset orders on error
      });
  };

  // Open Buy Window
  const openBuyWindow = (uid) => {
    console.log("Opening Buy Window for:", uid); // Debugging log
    setSelectedStockUID(uid);
    setIsBuyWindowOpen(true);
    setIsSellWindowOpen(false);
  };

  // Close Buy Window
  const closeBuyWindow = () => {
    console.log("Closing Buy Window"); // Debugging log
    setSelectedStockUID(null);
    setIsBuyWindowOpen(false);
  };

  // Open Sell Window
  const openSellWindow = (uid) => {
    console.log("Opening Sell Window for:", uid); // Debugging log
    setSelectedStockUID(uid);
    setIsSellWindowOpen(true);
    setIsBuyWindowOpen(false);
  };

  // Close Sell Window
  const closeSellWindow = () => {
    console.log("Closing Sell Window"); // Debugging log
    setSelectedStockUID(null);
    setIsSellWindowOpen(false);
  };
  
  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <GeneralContext.Provider
      value={{
        orders,
        fetchOrders,
        isBuyWindowOpen,
        isSellWindowOpen,
        selectedStockUID,
        openBuyWindow,
        closeBuyWindow,
        openSellWindow,
        closeSellWindow,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;