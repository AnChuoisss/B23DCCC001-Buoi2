import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../Views/ProductSlices";
import { useNavigate } from "react-router-dom";

const AddProductForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (!name || !price) {
      alert("Vui lòng nhập đầy đủ thông tin");
      return;
    }
    const newProduct = {
      id: Date.now(),
      name,
      price: parseFloat(price),
    };
    dispatch(addProduct(newProduct));
    navigate("/Products");
  }, [name, price, dispatch, navigate]);

  return (
    <div className="form-container">
      <h2>Thêm Hàng Hóa</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tên hàng hóa"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Giá hàng hóa"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <button type="submit" disabled={!name || !price}>
          Thêm hàng hóa
        </button>
      </form>
      <button className="back-btn" onClick={() => navigate("/Products")}>
        Quay Lại
      </button>
    </div>
  );
};

export default AddProductForm;