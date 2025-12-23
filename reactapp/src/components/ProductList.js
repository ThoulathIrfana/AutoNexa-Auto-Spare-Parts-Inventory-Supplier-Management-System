import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

const ProductList = () => {
  const { products } = useContext(ProductContext);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "18px",
      }}
    >
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            padding: "18px 22px",
            borderRadius: "16px",
            background:
              "linear-gradient(135deg, #f8fafc, #e5e7eb)",
            borderLeft: "6px solid #38bdf8",
            boxShadow:
              "0 18px 35px rgba(0,0,0,0.65)",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
          }}
        >
          <Link
            to={`/product/${product.id}`}
            style={{
              textDecoration: "none",
              fontWeight: "800",
              fontSize: "16px",
              color: "#020617",
              letterSpacing: "0.3px",
            }}
          >
            {product.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
