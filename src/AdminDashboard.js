import React, { useState } from "react";
import productsData from "./data/products";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [products, setProducts] = useState(productsData);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [supplier, setSupplier] = useState("All");

  // ===== COUNTS =====
  const totalProducts = products.length;
  const lowStockCount = products.filter(p => p.stock <= 10).length;
  const replenishItems = products.filter(p => p.stock <= 10);

  const categories = ["All", ...new Set(products.map(p => p.category))];
  const suppliers = ["All", ...new Set(products.map(p => p.supplier))];

  // ===== CATEGORY SUMMARY =====
  const categorySummary = products.reduce((acc, p) => {
    if (!acc[p.category]) {
      acc[p.category] = { count: 0, stock: 0 };
    }
    acc[p.category].count += 1;
    acc[p.category].stock += p.stock;
    return acc;
  }, {});

  // ===== STOCK UPDATE =====
  const increaseStock = (id) => {
    setProducts(products.map(p =>
      p.id === id ? { ...p, stock: p.stock + 1 } : p
    ));
  };

  const decreaseStock = (id) => {
    setProducts(products.map(p =>
      p.id === id && p.stock > 0 ? { ...p, stock: p.stock - 1 } : p
    ));
  };

  // ===== FILTER =====
  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) &&
    (category === "All" || p.category === category) &&
    (supplier === "All" || p.supplier === supplier)
  );

  return (
    <div className="admin-container">
      <h1>Admin Dashboard</h1>

      {/* ===== SUMMARY CARDS ===== */}
      <div className="admin-stats">
        <div className="admin-card">
          <h3>Total Products</h3>
          <p>{totalProducts}</p>
        </div>

        <div className="admin-card warning">
          <h3>Low Stock Items</h3>
          <p>{lowStockCount}</p>
        </div>

        <div className="admin-card">
          <h3>Total Suppliers</h3>
          <p>{suppliers.length - 1}</p>
        </div>

        {/*  STOCK REPLENISHMENT CARD */}
        <div className="admin-card replenish">
          <h3>Stock Replenishment</h3>
          <p>{replenishItems.length}</p>
          <span className="replenish-text">
            Items need restocking
          </span>
        </div>
      </div>

      {/* ===== CATEGORY SUMMARY ===== */}
      <h2 className="section-title">Category Stock Summary</h2>

      <div className="category-summary">
        {Object.entries(categorySummary).map(([category, data]) => (
          <div
            key={category}
            className={`category-card category-${category.toLowerCase()}`}
          >
            <h3>{category}</h3>
            <p>Products: {data.count}</p>
            <p>Total Stock: {data.stock}</p>
          </div>
        ))}
      </div>

      {/* ===== FILTER BAR ===== */}
      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        <select value={supplier} onChange={(e) => setSupplier(e.target.value)}>
          {suppliers.map(s => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      {/* ===== PRODUCT TABLE ===== */}
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Category</th>
              <th>Supplier</th>
              <th>Stock</th>
              <th>Price (₹)</th>
              <th>Update Stock</th>
            </tr>
          </thead>

          <tbody>
            {filteredProducts.length === 0 ? (
              <tr>
                <td colSpan="6" style={{ textAlign: "center" }}>
                  No products found
                </td>
              </tr>
            ) : (
              filteredProducts.map(p => (
                <tr
                  key={p.id}
                  className={p.stock <= 10 ? "low-stock-row" : ""}
                >
                  <td>{p.name}</td>
                  <td>{p.category}</td>
                  <td>{p.supplier}</td>
                  <td>{p.stock}</td>
                  <td>{p.price}</td>
                  <td className="stock-btns">
                    <button onClick={() => decreaseStock(p.id)}>-</button>
                    <button onClick={() => increaseStock(p.id)}>+</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
