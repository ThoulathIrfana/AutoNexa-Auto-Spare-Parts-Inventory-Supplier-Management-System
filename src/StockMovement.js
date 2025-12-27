import React, { useState } from "react";
import productsData from "./data/products";
import "./StockMovement.css";

const StockMovement = () => {
  const [products, setProducts] = useState(productsData);
  const [logs, setLogs] = useState([]);

  const moveStock = (id, type) => {
    setProducts(prev =>
      prev.map(p => {
        if (p.id === id) {
          if (type === "OUT" && p.stock === 0) return p;

          const updatedStock =
            type === "IN" ? p.stock + 1 : p.stock - 1;

          setLogs(prevLogs => [
            {
              product: p.name,
              supplier: p.supplier,
              type,
              time: new Date().toLocaleString(),
            },
            ...prevLogs,
          ]);

          return { ...p, stock: updatedStock };
        }
        return p;
      })
    );
  };

  return (
    <div className="movement-container">
      <h1>Stock Movement Tracking</h1>

      {/* PRODUCTS TABLE */}
      <table className="movement-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Supplier</th>
            <th>Current Stock</th>
            <th>Movement</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.supplier}</td>
              <td>{p.stock}</td>
              <td className="movement-btns">
                <button onClick={() => moveStock(p.id, "IN")}>IN</button>
                <button onClick={() => moveStock(p.id, "OUT")}>OUT</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* MOVEMENT LOG */}
      <h2 className="log-title">Movement Log</h2>

      <div className="log-box">
        {logs.length === 0 ? (
          <p>No stock movements yet</p>
        ) : (
          logs.map((log, index) => (
            <div key={index} className={`log ${log.type}`}>
              <strong>{log.product}</strong> ({log.supplier}) —
              {log.type === "IN" ? " Added to storage" : " Sold"}
              <span>{log.time}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default StockMovement;
