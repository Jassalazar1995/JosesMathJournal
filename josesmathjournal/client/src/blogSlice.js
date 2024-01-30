import { createSlice } from '@reduxjs/toolkit';

export const blogSlice = createSlice({
    name: 'blog',
    initialState: {
        posts: [],
    },
    reducers: {
        setBlogPosts: (state, action) => {
            state.posts = action.payload;
        },
        // I can add other reducers for adding, updating and deleting post
    },
});

export const { setBlogPosts } = blogSlice.actions;

export default blogSlice.reducer;
