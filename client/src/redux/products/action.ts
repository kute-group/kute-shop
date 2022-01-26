import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  GET_PRODUCT,
  GET_PRODUCTS,
  ADD_PRODUCT,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
} from "./type";
import { API_URL } from "../../config/config";


export const getProducts = createAsyncThunk(GET_PRODUCTS, async () => {
  const response = await axios.get(`${API_URL}/api/Products`);
  console.log(getProducts);
  return response.data;
});

export const getProduct = createAsyncThunk(GET_PRODUCT, async (params: any) => {
  const response = await axios.get(`${API_URL}/api/Products/${params.id}`);
  return response.data;
});


export const createProduct = createAsyncThunk(
  ADD_PRODUCT,
  async (params: any) => {
    const response = await axios.post(`${API_URL}/api/Product`, params);
    console.log("params", params);

    console.log(createProduct);
    return response.data;
  }
);

export const editProduct = createAsyncThunk(
  EDIT_PRODUCT,
  async (params: any) => {
    const response = await axios.put(`${API_URL}/api/Product/${params.id}`);
    console.log(editProduct);
    return response.data;
  }
);

export const deleteProduct = createAsyncThunk(
  DELETE_PRODUCT,
  async (params: any) => {
    const response = await axios.delete(`${API_URL}/api/Product/${params.id}`);
    console.log(deleteProduct);

    console.log(1, params);
    return response.data;
  }
);
