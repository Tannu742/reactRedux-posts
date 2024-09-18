import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api, { getMethod } from '../../utils/api';
import constants from '../../constants';

const initialState = {
    post: {},
    status: "idle",
    error: ""
}

export const fetchSinglePosts = createAsyncThunk("posts/fetchSinglePosts", async (postId) => {
    const x = await getMethod(`${api.posts}/${postId}`).then(({ data }) => data);
    console.log(x);
    return x
})

const singlePostsSlice = createSlice({
    name: 'post',
    initialState,
    extraReducers(builder) {
        builder
            .addCase(fetchSinglePosts.pending, (state) => {
                state.status = constants.STATUS.LOADING;
                state.post = {};
            })
            .addCase(fetchSinglePosts.fulfilled, (state, action) => {
                state.status = constants.STATUS.SUCCESS
                state.post = action.payload;
            })
            .addCase(fetchSinglePosts.rejected, (state, action) => {
                state.status = constants.STATUS.FAIL
                state.post = action.error.message;
            })
    }
})
export default singlePostsSlice.reducer;
