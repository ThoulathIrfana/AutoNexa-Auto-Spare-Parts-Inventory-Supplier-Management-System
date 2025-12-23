import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header
      style={{
        background:
          "linear-gradient(180deg, #020617 0%, #0f172a 60%, #020617 100%)",
        padding: "28px 36px",
        borderRadius: "18px",
        marginBottom: "40px",
        boxShadow:
          "0 25px 60px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.06)",
        border: "1px solid rgba(148,163,184,0.18)",
      }}
    >
      {/* HEADING */}
      <h1
        style={{
          textAlign: "center",
          marginBottom: "24px",
          fontSize: "28px",
          fontWeight: "800",
          letterSpacing: "1px",
          color: "#e5e7eb",
          textShadow:
            "0 0 12px rgba(56,189,248,0.6), 0 0 30px rgba(59,130,246,0.4)",
        }}
      >
        Automobile Spare Parts Inventory
      </h1>

      {/* NAV LINKS */}
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "36px",
        }}
      >
        <Link
          to="/"
          style={{
            color: "#f9fafb",
            textDecoration: "none",
            fontWeight: "700",
            fontSize: "16px",
            padding: "10px 20px",
            borderRadius: "12px",
            backgroundColor: "rgba(255,255,255,0.08)",
            boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.1)",
          }}
        >
          Product List
        </Link>

        <Link
          to="/add"
          style={{
            color: "#020617",
            textDecoration: "none",
            fontWeight: "800",
            fontSize: "16px",
            padding: "10px 24px",
            borderRadius: "14px",
            background:
              "linear-gradient(135deg, #22d3ee, #3b82f6)",
            boxShadow:
              "0 12px 30px rgba(59,130,246,0.8)",
          }}
        >
          Add Product
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
