import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import PartList from "./PartList";
import PartDetails from "./PartDetails";
import OrderForm from "./OrderForm";
import AdminDashboard from "./AdminDashboard";
import Navbar from "./Navbar";
import Cart from "./Cart";
import OrderHistory from "./OrderHistory";
import StockMovement from "./StockMovement";
import Suppliers from "./Suppliers";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [search, setSearch] = useState("");
  const [orders, setOrders] = useState([]);

  const cartCount = cartItems.reduce((sum, i) => sum + i.qty, 0);

  return (
    <div className="light-app">
      <Navbar
        cartCount={cartCount}
        search={search}
        setSearch={setSearch}
      />

      <Routes>
        <Route
          path="/"
          element={
            <PartList
              cartItems={cartItems}
              setCartItems={setCartItems}
              search={search}
            />
          }
        />

        <Route
          path="/details/:id"
          element={
            <PartDetails
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          }
        />

        <Route
          path="/order/:id"
          element={
            <OrderForm
              orders={orders}
              setOrders={setOrders}
            />
          }
        />

        <Route
          path="/admin"
          element={
            <AdminDashboard
              orders={orders}
              setOrders={setOrders}
            />
          }
        />

        <Route
          path="/movement"
          element={<StockMovement />}
        />

        {/*  SUPPLIER MANAGEMENT ROUTE */}
        <Route
          path="/suppliers"
          element={<Suppliers />}
        />

        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          }
        />

        <Route
          path="/orders"
          element={<OrderHistory orders={orders} />}
        />
      </Routes>
    </div>
  );
}

export default App;
