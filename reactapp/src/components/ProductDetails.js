import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);

  const product = products.find((p) => p.id === Number(id));

  if (!product)
    return (
      <p
        style={{
          textAlign: "center",
          marginTop: "40px",
          color: "#dc2626",
          fontSize: "16px",
          fontWeight: "600",
        }}
      >
        Product not found
      </p>
    );

  return (
    <div
      style={{
        maxWidth: "520px",
        margin: "50px auto",
        padding: "30px",
        borderRadius: "16px",
        backgroundColor: "#ffffff",
        boxShadow:
          "0 20px 40px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.8)",
        border: "1px solid #e5e7eb",
      }}
    >
      <h2
        style={{
          color: "#111827",
          marginBottom: "12px",
          fontWeight: "700",
          fontSize: "22px",
        }}
      >
        {product.name}
      </h2>

      <p
        style={{
          color: "#4b5563",
          marginBottom: "18px",
          lineHeight: "1.6",
        }}
      >
        {product.description}
      </p>

      <div
        style={{
          display: "inline-block",
          padding: "8px 14px",
          borderRadius: "999px",
          backgroundColor: "#ecfeff",
          color: "#0369a1",
          fontWeight: "600",
          fontSize: "14px",
          marginBottom: "24px",
        }}
      >
        Stock: {product.stock}
      </div>

      <div>
        <Link
          to={`/stock/${product.id}`}
          style={{
            display: "inline-block",
            padding: "10px 20px",
            background: "linear-gradient(135deg, #3b82f6, #2563eb)",
            color: "#ffffff",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: "600",
            boxShadow: "0 10px 20px rgba(59,130,246,0.35)",
          }}
        >
          manage stock
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
