import React, { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Brake Pad",
      description: "High quality brake pad",
      stock: 10,
    },
  ]);

  const addProduct = (product) => {
    setProducts((prev) => [...prev, product]);
  };

  const updateStock = (id, value) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, stock: p.stock + value } : p
      )
    );
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, updateStock }}>
      {children}
    </ProductContext.Provider>
  );
};
