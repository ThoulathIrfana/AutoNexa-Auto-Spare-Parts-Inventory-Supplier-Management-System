import React from "react";
import "./Cart.css";

const Cart = ({ cartItems = [], setCartItems }) => {

  // ➕ Increase quantity
  const increaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  // ➖ Decrease quantity
  const decreaseQty = (id) => {
    setCartItems(
      cartItems
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  // ❌ Remove item completely
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // 🧮 Calculations
  const totalItems = cartItems.reduce((sum, item) => sum + item.qty, 0);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  // ✅ Checkout confirmation
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Cart is empty!");
      return;
    }

    const confirmCheckout = window.confirm(
      `Confirm purchase of ${totalItems} items for ₹${totalPrice}?`
    );

    if (confirmCheckout) {
      setCartItems([]);
      alert("Checkout successful! Thank you for your purchase.");
    }
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty 🛒</p>
      ) : (
        <>
          <div className="cart-list">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-card">
                
                {/* PRODUCT INFO */}
                <div>
                  <h3>{item.name}</h3>
                  <p className="category">{item.category}</p>
                  <p>Price: ₹{item.price}</p>
                </div>

                {/* QTY + REMOVE */}
                <div className="qty-controls">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                  <button className="remove-btn" onClick={() => removeItem(item.id)}></button>

                </div>

                {/* ITEM TOTAL */}
                <div>
                  <strong>₹{item.price * item.qty}</strong>
                </div>
              </div>
            ))}
          </div>

          {/* SUMMARY */}
          <div className="cart-summary">
            <div>
              <h3>Total Items: {totalItems}</h3>
              <h3>Total Price: ₹{totalPrice}</h3>
            </div>

            <button className="checkout-btn" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
