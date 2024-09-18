import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api, { getMethod } from '../../utils/api';
import constants from '../../constants';

const initialState = {
    allposts: [],
    posts: [],
    status: 'idle',
    error: ''
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    return await getMethod(`${api.posts}`).then(({ data }) => data)
})
const PostSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        searchPosts: (state, action) => {
            console.log(action.payload, '=== state, action ===');
            state.posts = action.payload.mainData.filter((item) => item.title.trim().toLowerCase().includes(action.payload?.serachQuery.trim().toLowerCase()));
            console.log(state.posts, '=== state, action ===');
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = constants.STATUS.LOADING;
                state.allposts = [];
                state.posts = [];
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = constants.STATUS.SUCCESS;
                state.allposts = action.payload || [];
                state.posts = action.payload || [];
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = constants.STATUS.FAIL;
                state.allposts = action.error.message || [];
                state.posts = action.error.message || [];
            })
    }
});

export const { searchPosts } = PostSlice.actions;

export default PostSlice.reducer;
