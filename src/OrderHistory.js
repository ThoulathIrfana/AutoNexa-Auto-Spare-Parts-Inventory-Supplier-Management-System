import React from "react";
import "./OrderHistory.css";

const OrderHistory = ({ orders }) => {
  return (
    <div className="order-history">
      <h1>Order History</h1>

      {orders.length === 0 ? (
        <p>No orders yet</p>
      ) : (
        <table className="orders-table">
  <thead>
    <tr>
      <th>Customer</th>
      <th>Product</th>
      <th>Category</th>
      <th>Quantity</th>
      <th>Total Price</th>
      <th>Status</th>
    </tr>
  </thead>

  <tbody>
    {orders.length === 0 ? (
      <tr>
        <td colSpan="6" style={{ textAlign: "center" }}>
          No orders yet
        </td>
      </tr>
    ) : (
      orders.map((o, i) => {
        const categoryClass = `category-${o.category?.toLowerCase()}`;

        return (
          <tr key={i} className={categoryClass}>
            <td>{o.customer}</td>
            <td>{o.product}</td>
            <td>{o.category}</td>
            <td>{o.qty}</td>
            <td>₹{o.total}</td>
            <td>{o.status}</td>
          </tr>
        );
      })
    )}
  </tbody>
</table>

      )}
    </div>
  );
};

export default OrderHistory;
