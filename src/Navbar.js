import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ cartCount, search, setSearch }) => {
  return (
    <div className="navbar">

      {/* LOGO */}
      <div className="logo">
        <Link to="/">
          Auto<span>Nexa</span>
        </Link>
      </div>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search auto spare parts..."
        className="navbar-search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* NAV ACTIONS */}
      <div className="nav-actions">

        <Link to="/suppliers" className="nav-link">
          Suppliers
        </Link>

        <Link to="/movement" className="nav-link">
          Stock Movement
        </Link>

        <Link to="/admin" className="nav-link">
          Admin
        </Link>

        <Link to="/orders" className="nav-link">
          Orders
        </Link>

        <Link to="/cart" className="cart">
          🛒
          <span className="cart-badge">{cartCount}</span>
        </Link>

      </div>
    </div>
  );
};

export default Navbar;
