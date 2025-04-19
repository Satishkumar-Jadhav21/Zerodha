import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { useAuth } from "../hooks/useAuth";

const Orders = () => {
  const [allOrders, SetAllOrders] = useState([]);
  let { user } = useAuth();

  useEffect(() => {
    axios
      .get("http://localhost:3005/orders", {
        headers: {
          Authorization: user,
        },
      })
      .then((res) => {
        SetAllOrders(res.data);
      });
  }, [])

  return (
    <>
      <h3 className="title">Orders ({allOrders.length})</h3>

      <div className="order-table">
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Qty.</th>
        <th>Price</th>
        <th>Mode</th>
      </tr>
    </thead>
    <tbody>
      {allOrders.map((stock, index) => {
        if (!stock) return null;

        return (
          <tr key={index}>
            <td>{stock.name || "N/A"}</td>
            <td>{stock.qty ?? "N/A"}</td>
            <td>{typeof stock.price === "number" ? stock.price.toFixed(2) : "N/A"}</td>
            <td>{stock.mode || "N/A"}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
</div>
    </>
  );
};

export default Orders;
