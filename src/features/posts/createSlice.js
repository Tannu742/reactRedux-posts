import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import api, { postMethod } from '../../utils/api';
import constants from '../../constants';


const initialState = {
    createPosts: [],
    status: "idle",
    error: ""
}

export const fetchCreatePosts = createAsyncThunk("post/fetchCreatePosts", async (data = {}) => {
    console.log(data.id);
    return await postMethod(`${api.posts}/${data.id}`, {
        title: data.title,
        body: data.body
    }).then(({ data }) => data)
})

const createPostSlice = createSlice({
    name: 'createPosts',
    initialState,
    extraReducers(builder) {
        builder
            .addCase(fetchCreatePosts.pending, (state) => {
                state.status = constants.STATUS.LOADING;
                state.createPosts = [];
            })
            .addCase(fetchCreatePosts.fulfilled, (state, action) => {
                state.status = constants.STATUS.SUCCESS;
                state.createPosts.splice(action.payload.i, 1, action.payload.text);
            })
            .addCase(fetchCreatePosts.rejected, (state, action) => {
                state.status = constants.STATUS.FAIL
                state.createPosts = action.error.message
            })
    }
})

export default createPostSlice.reducer;
