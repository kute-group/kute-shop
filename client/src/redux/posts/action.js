import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { GET_POST, GET_POSTS, ADD_POST, EDIT_POST, DELETE_POST } from 'redux/posts/type';
import { params } from 'react'
import { API_URL } from 'config/config'

export const getPosts = createAsyncThunk(
  GET_POSTS, async () => {
    const response = await axios.get(`${API_URL}/api/posts`);
    console.log(getPosts);
    return response.data;
  }
);

export const getPost = createAsyncThunk(
  GET_POST, async (params) => {
    const response = await axios.get(`${API_URL}/api/posts/${params.id}`);
    return response.data;
  }
);

export const createPost = createAsyncThunk(
  ADD_POST, async () => {
    const response = await axios.post(`${API_URL}/api/post`);
    console.log(createPost);
    return response.data;
  }
);

export const editPost = createAsyncThunk(
  EDIT_POST, async (params) => {
    const response = await axios.put(`${API_URL}/api/post/${params.id}`);
    console.log(editPost);
    return response.data;
  }
);

export const deletePost = createAsyncThunk(
  DELETE_POST, async (params) => {
      const response = await axios.delete(`${API_URL}/api/post/${params.id}`);
    console.log(deletePost);

    console.log(1,params);
    return response.data;
  }
);

