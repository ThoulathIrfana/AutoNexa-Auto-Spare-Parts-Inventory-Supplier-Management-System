import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import products from "./data/products";
import "./PartList.css";

const PartList = ({ cartItems = [], setCartItems, search }) => {
  const navigate = useNavigate();

  const [category, setCategory] = useState("All");
  const [supplier, setSupplier] = useState("All");

  // UNIQUE values
  const categories = ["All", ...new Set(products.map(p => p.category))];
  const suppliers = ["All", ...new Set(products.map(p => p.supplier))];

  // FILTER LOGIC
  const filteredProducts = products.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "All" || p.category === category;
    const matchSupplier = supplier === "All" || p.supplier === supplier;
    return matchSearch && matchCategory && matchSupplier;
  });

  const addToCart = (product) => {
    const exists = cartItems.find(item => item.id === product.id);

    if (exists) {
      setCartItems(
        cartItems.map(item =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  return (
    <div className="part-list-container">

      {/* HERO */}
      <div className="hero-section">
        <h1>AutoNexa Spare Parts</h1>
        <p>Genuine parts • Trusted suppliers • Easy ordering</p>
      </div>

      {/* FILTER BAR */}
      <div className="filter-bar">
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

      {/* PRODUCTS */}
      <div className="product-grid">
        {filteredProducts.length === 0 ? (
          <p className="no-results">No products found</p>
        ) : (
          filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <h3>{product.name}</h3>
              <p>{product.category}</p>
              <p>Supplier: {product.supplier}</p>

              <div className="btn-row">
                <button
                  className="btn small"
                  onClick={() => navigate(`/details/${product.id}`)}
                >
                  View
                </button>

                <button
                  className="btn small cart"
                  onClick={() => addToCart(product)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PartList;
