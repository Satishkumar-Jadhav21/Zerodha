import React, { useContext } from "react";
import GeneralContext from "./GeneralContext";

const Orders = () => {
  const { orders } = useContext(GeneralContext); // Use orders from context

  return (
    <>
      <h3 className="title">Orders ({orders.length})</h3>

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
            {orders.length > 0 ? (
              orders.map((stock, index) => (
                <tr key={index}>
                  <td>{stock.name || "N/A"}</td>
                  <td>{stock.qty ?? "N/A"}</td>
                  <td>{typeof stock.price === "number" ? stock.price.toFixed(2) : "N/A"}</td>
                  <td>{stock.mode || "N/A"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No orders found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Orders;
