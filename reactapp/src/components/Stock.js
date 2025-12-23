import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

const Stock = () => {
  const { id } = useParams();
  const history = useHistory();
  const { products, updateStock } = useContext(ProductContext);

  const product = products.find((p) => p.id === Number(id));

  if (!product) return <p style={{ color: "#fff" }}>product not found</p>;

  return (
    <div
      style={{
        maxWidth: "420px",
        margin: "60px auto",
        padding: "28px",
        borderRadius: "16px",
        backgroundColor: "#f8fafc", // light card on dark bg
        boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontSize: "20px",
          fontWeight: "700",
          marginBottom: "28px",
          color: "#111827",
        }}
      >
        Current Stock: {product.stock}
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "18px",
          marginBottom: "28px",
        }}
      >
        <button
          onClick={() => updateStock(product.id, 1)}
          style={{
            width: "50px",
            height: "50px",
            fontSize: "24px",
            borderRadius: "50%",
            border: "none",
            backgroundColor: "#22c55e",
            color: "#ffffff",
            cursor: "pointer",
            boxShadow: "0 6px 14px rgba(0,0,0,0.25)",
          }}
        >
          +
        </button>

        <button
          onClick={() => updateStock(product.id, -1)}
          style={{
            width: "50px",
            height: "50px",
            fontSize: "24px",
            borderRadius: "50%",
            border: "none",
            backgroundColor: "#ef4444",
            color: "#ffffff",
            cursor: "pointer",
            boxShadow: "0 6px 14px rgba(0,0,0,0.25)",
          }}
        >
          -
        </button>
      </div>

      <button
        onClick={() => history.push(`/product/${product.id}`)}
        style={{
          padding: "12px 22px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#6366f1",
          color: "#ffffff",
          fontWeight: "600",
          cursor: "pointer",
          boxShadow: "0 6px 14px rgba(0,0,0,0.3)",
        }}
      >
        Back to Product
      </button>
    </div>
  );
};

export default Stock;
