import { createSlice } from '@reduxjs/toolkit';

import {
  getPosts,
  getPost,
  createPost,
  editPost,
  deletePost,
} from './action'

const postsSlice = createSlice({
  name : 'posts',
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
    }
  },

  extraReducers: {
    [getPost.pending]: (state, action) => {
      state.item.loading = true;
    },

    [getPost.fulfilled]: (state, action) => {
      state.item.loading = false;
      state.item.data = action.payload;
    },

    [getPost.rejected]: (state, action) => {
      state.item.loading = false;
      state.item.error = action.error;
      console.error('error', action.error);
    },
    [getPosts.pending]: (state, action) => {
      state.list.loading = true;
    },

    [getPosts.fulfilled]: (state, action) => {
      state.list.loading = false;
      state.list.data = action.payload;
    },

    [getPosts.rejected]: (state, action) => {
      state.list.loading = false;
      state.list.error = action.error;
      console.error('error', action.error);
    },

    [createPost.pending]: (state, action) => {
      state.list.loading = true;
    },

    [createPost.fulfilled]: (state, action) => {
      state.list.loading = false;
      state.list.data = action.payload;
    },

    [createPost.rejected]: (state, action) => {
      state.list.loading = false;
      state.list.error = action.error;
      console.error('error', action.error);
    },

    [editPost.pending]: (state, action) => {
      state.list.loading = true;
    },

    [editPost.fulfilled]: (state, action) => {
      state.list.loading = false;
      state.list.data = action.payload;
    },

    [editPost.rejected]: (state, action) => {
      state.list.loading = false;
      state.list.error = action.error;
      console.error('error', action.error);
    },

    [deletePost.pending]: (state, action) => {
      state.list.loading = true;
    },

    [deletePost.fulfilled]: (state, action) => {
      state.list.loading = false;
      state.list.data = action.payload;
    },

    [deletePost.rejected]: (state, action) => {
      state.list.loading = false;
      state.list.error = action.error;
      console.error('error', action.error);
    }
  },
})

export default postsSlice.reducer;