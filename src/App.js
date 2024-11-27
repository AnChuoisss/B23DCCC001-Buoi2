import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Views/Store";
import Products from "./tinh nang/Products";
import AddProduct from "./tinh nang/AddProduct";
import EditProduct from "./tinh nang/EditProduct";
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Navigate to="/products" replace />} />
            <Route path="/products" element={<Products />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/edit-product/:id" element={<EditProduct />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
