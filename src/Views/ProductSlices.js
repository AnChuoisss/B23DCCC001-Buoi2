import { createSlice } from "@reduxjs/toolkit";

const loadProducts = () => {
  const products = localStorage.getItem("products");
  return products ? JSON.parse(products) : [];
};

const saveProducts = (products) => {
  localStorage.setItem("products", JSON.stringify(products));
};

const updateLocalStorage = (state) => {
  saveProducts(state);
};

const productsSlice = createSlice({
  name: "products",
  initialState: loadProducts(),
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
      updateLocalStorage(state);
    },
    deleteProduct: (state, action) => {
      state = state.filter(product => product.id !== action.payload);
      updateLocalStorage(state);
    },
    updateProduct: (state, action) => {
      const index = state.findIndex(product => product.id === action.payload.id);
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload };
      }
      updateLocalStorage(state);
    },
  },
});

export const { addProduct, deleteProduct, updateProduct } = productsSlice.actions;
export default productsSlice.reducer;