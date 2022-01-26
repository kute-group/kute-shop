import { createSlice } from "@reduxjs/toolkit";

import {
  getProducts,
  getProduct,
  createProduct,
  editProduct,
  deleteProduct,
} from "./action";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    list: {
      data: [],
      loading: false,
      error: {},
    },
    item: {
      data: [],
      loading: false,
      error: {},
    },
  },
  reducers: {},
  extraReducers: {
    [getProduct.pending as any]: (state, action) => {
      state.item.loading = true;
    },

    [getProduct.fulfilled as any]: (state, action) => {
      state.item.loading = false;
      state.item.data = action.payload;
    },

    [getProduct.rejected as any]: (state, action) => {
      state.item.loading = false;
      state.item.error = action.error;
      console.error("error", action.error);
    },
    [getProducts.pending as any]: (state, action) => {
      state.list.loading = true;
    },

    [getProducts.fulfilled as any]: (state, action) => {
      state.list.loading = false;
      state.list.data = action.payload;
    },

    [getProducts.rejected as any]: (state, action) => {
      state.list.loading = false;
      state.list.error = action.error;
      console.error("error", action.error);
    },

    [createProduct.pending as any]: (state, action) => {
      state.list.loading = true;
    },

    [createProduct.fulfilled as any]: (state, action) => {
      state.list.loading = false;
      state.list.data = action.payload;
    },

    [createProduct.rejected as any]: (state, action) => {
      state.list.loading = false;
      state.list.error = action.error;
      console.error("error", action.error);
    },

    [editProduct.pending as any]: (state, action) => {
      state.list.loading = true;
    },

    [editProduct.fulfilled as any]: (state, action) => {
      state.list.loading = false;
      state.list.data = action.payload;
    },

    [editProduct.rejected as any]: (state, action) => {
      state.list.loading = false;
      state.list.error = action.error;
      console.error("error", action.error);
    },

    [deleteProduct.pending as any]: (state, action) => {
      state.list.loading = true;
    },

    [deleteProduct.fulfilled as any]: (state, action) => {
      state.list.loading = false;
      state.list.data = action.payload;
    },

    [deleteProduct.rejected as any]: (state, action) => {
      state.list.loading = false;
      state.list.error = action.error;
      console.error("error", action.error);
    },
  },
});

export default productsSlice.reducer;
