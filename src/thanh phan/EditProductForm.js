import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateProduct } from "../Views/ProductSlices";

const EditProductForm = () => {
  const { id } = useParams(); 
  const product = useSelector((state) =>
    state.products.find((product) => product.id === parseInt(id))
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (product) {
      setName(product.name);
      setPrice(product.price);
    }
  }, [product]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (!name || !price) {
      alert("Vui lòng nhập đầy đủ thông tin");
      return;
    }
    dispatch(updateProduct({ id: product.id, name, price: parseFloat(price) }));
    navigate("/products"); // Quay lại danh sách hàng hóa
  }, [dispatch, navigate, name, price, product]);

  return (
    <div className="form-container">
      <h2>Chỉnh Sửa Hàng Hóa</h2>
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
          Lưu Thay Đổi
        </button>
      </form>
      <button className="back-btn" onClick={() => navigate("/products")}>
        Quay Lại
      </button>
    </div>
  );
};

export default EditProductForm;