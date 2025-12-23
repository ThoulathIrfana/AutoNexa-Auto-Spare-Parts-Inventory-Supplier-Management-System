import React from "react";
import ProductList from "./ProductList";

const Home = () => {
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "28px",
        background:
          "linear-gradient(145deg, #020617, #111827)",
        borderRadius: "18px",
        boxShadow:
          "0 20px 40px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <h2
        style={{
          marginBottom: "24px",
          color: "#f9fafb",
          fontSize: "24px",
          fontWeight: "700",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          paddingBottom: "10px",
        }}
      >
        List of Products
      </h2>

      <ProductList />
    </div>
  );
};

export default Home;
