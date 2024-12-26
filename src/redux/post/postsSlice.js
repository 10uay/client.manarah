import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: {}, // Initialize with an empty object for posts
};

export const postsSlice = createSlice({
  name: "posts", // You might want to rename this slice to something more relevant (e.g., 'app')
  initialState,
  reducers: {
    allPosts: (state, action) => {
      // Assuming action.payload contains the posts data
      state.posts = action.payload;
    },
  },
});

export const { allPosts } = postsSlice.actions;

export default postsSlice.reducer;
