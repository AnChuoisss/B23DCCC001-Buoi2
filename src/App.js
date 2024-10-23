import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
}
from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Views/Store";
import Products from "./tinh nang/Products";
import AddProduct from "./tinh nang/AddProduct";
import EditProduct from "./tinh nang/EditProduct";
import "./App.css"; 


const MainContent = () => {
  return (
    <div className="main-content">
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="app-container">
          <MainContent />
        </div>
      </Router>
    </Provider>
  );
};

export default App;