import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ProductProvider } from "./context/ProductContext";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddProduct from "./components/AddProduct";
import ProductDetails from "./components/ProductDetails";
import Stock from "./components/Stock";

function App() {
  return (
    <ProductProvider>
      <Router>
        {/* Full dark background wrapper */}
        <div
          style={{
            minHeight: "100vh",
            background: "linear-gradient(135deg, #020617, #0f172a)",
            padding: "20px",
            color: "#e5e7eb",
            fontFamily: "Arial, sans-serif",
          }}
        >
          {/* Centered content container */}
          <div
            style={{
              maxWidth: "1100px",
              margin: "0 auto",
            }}
          >
            <Navbar />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/add" component={AddProduct} />
              <Route path="/product/:id" component={ProductDetails} />
              <Route path="/stock/:id" component={Stock} />
            </Switch>
          </div>
        </div>
      </Router>
    </ProductProvider>
  );
}

export default App;
