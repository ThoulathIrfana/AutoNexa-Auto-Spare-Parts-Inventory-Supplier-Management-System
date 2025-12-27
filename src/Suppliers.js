import React from "react";
import suppliers from "./data/suppliers";
import products from "./data/products";
import "./Suppliers.css";

const Suppliers = () => {
  return (
    <div className="suppliers-page">
      <h2>Supplier Management</h2>

      <table className="supplier-table">
        <thead>
          <tr>
            <th>Supplier</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Location</th>
            <th>Parts Available</th>
          </tr>
        </thead>

        <tbody>
          {suppliers.map((s) => {
            const suppliedParts = products.filter(
              (p) => p.supplier === s.name
            );

            return (
              <tr key={s.name}>
                <td>{s.name}</td>
                <td>{s.phone}</td>
                <td>{s.email}</td>
                <td>{s.location}</td>
                <td>{suppliedParts.length}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Suppliers;
