import React, { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { useHistory } from "react-router-dom";

const AddProduct = () => {
  const { addProduct } = useContext(ProductContext);
  const history = useHistory();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct({
      id: Date.now(),
      name,
      description,
      stock: Number(stock),
    });
    history.push("/");
  };

  return (
    <div
      style={{
        maxWidth: "520px",
        margin: "60px auto",
        padding: "32px",
        borderRadius: "16px",
        backgroundColor: "#ffffff",
        border: "1px solid #e5e7eb",
        boxShadow:
          "0 20px 40px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.8)",
      }}
    >
      {/* IMPORTANT: not "Add Product" */}
      <h1
        style={{
          textAlign: "center",
          marginBottom: "26px",
          color: "#111827",
          fontWeight: "700",
          fontSize: "24px",
        }}
      >
        Add New Product
      </h1>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "18px",
        }}
      >
        <input
          placeholder="product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            padding: "12px 14px",
            borderRadius: "10px",
            border: "1px solid #d1d5db",
            fontSize: "14px",
            outline: "none",
          }}
        />

        <input
          placeholder="product description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{
            padding: "12px 14px",
            borderRadius: "10px",
            border: "1px solid #d1d5db",
            fontSize: "14px",
            outline: "none",
          }}
        />

        <input
          placeholder="stock quantity"
          type="number"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          style={{
            padding: "12px 14px",
            borderRadius: "10px",
            border: "1px solid #d1d5db",
            fontSize: "14px",
            outline: "none",
          }}
        />

        <button
          type="submit"
          style={{
            marginTop: "10px",
            padding: "14px",
            background: "linear-gradient(135deg, #3b82f6, #2563eb)",
            color: "#ffffff",
            border: "none",
            borderRadius: "12px",
            fontSize: "15px",
            fontWeight: "600",
            cursor: "pointer",
            boxShadow: "0 12px 24px rgba(59,130,246,0.35)",
          }}
        >
          Save product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
