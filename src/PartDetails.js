import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "./data/products";
import "./PartDetails.css";

const PartDetails = ({ cartItems, setCartItems }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <h2 style={{ padding: "20px" }}>Product Not Found</h2>;
  }

  // ✅ ADD TO CART
  const addToCart = () => {
    const exists = cartItems.find(i => i.id === product.id);

    if (exists) {
      setCartItems(
        cartItems.map(i =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }

    alert("Added to cart");
  };

  return (
    <div className="details-container">
      <div className="details-card">
        <h2>{product.name}</h2>

        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Supplier:</strong> {product.supplier}</p>
        <p><strong>Available Stock:</strong> {product.stock}</p>
        <p className="price">₹ {product.price}</p>

        <div className="details-actions">
          <button
            disabled={product.stock === 0}
            onClick={addToCart}
          >
            Add to Cart
          </button>

          <button
            disabled={product.stock === 0}
            onClick={() => navigate(`/order/${product.id}`)}
          >
            Order Now
          </button>

          <button className="back-btn" onClick={() => navigate(-1)}>
            ← Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default PartDetails;
