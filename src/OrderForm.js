import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "./data/products";
import "./OrderForm.css";

const OrderForm = ({ orders, setOrders }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(p => p.id === Number(id));

  const [name, setName] = useState("");
  const [qty, setQty] = useState(1);

  if (!product) return <h2>Product Not Found</h2>;

  const totalPrice = product.price * qty;

  const placeOrder = () => {
    if (!name.trim()) return alert("Enter customer name");
    if (qty <= 0) return alert("Invalid quantity");

    setOrders(prev => [
      ...prev,
      {
        customer: name,
        product: product.name,
        qty,
        total: totalPrice,
        status: "Pending"
      }
    ]);

    alert("Order placed successfully!!!");
    navigate("/");
  };

  return (
    <div className="order-container">
      <div className="order-card">
        <h2>Order {product.name}</h2>

        <p className="price">₹ {product.price} / unit</p>

        <input
          type="text"
          placeholder="Customer Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <input
          type="number"
          min="1"
          max={product.stock}
          value={qty}
          onChange={e => setQty(Number(e.target.value))}
        />

        <p className="total">Total: ₹ {totalPrice}</p>

        <button onClick={placeOrder}>Place Order</button>
      </div>
    </div>
  );
};

export default OrderForm;
