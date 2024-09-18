import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import api, { patchMethod } from '../../utils/api';
import constants from '../../constants';


const initialState = {
    editPosts: [],
    status: "idle",
    error: ""
}

export const fetchEditPosts = createAsyncThunk("post/fetchEditPosts", async (data = {}) => {
    console.log(data.id);
    return await patchMethod(`${api.posts}/${data.id}`, {
        title: data.title,
        body: data.body
    }).then(({ data }) => data)
})

const editPostSlice = createSlice({
    name: 'editPosts',
    initialState,
    extraReducers(builder) {
        builder
            .addCase(fetchEditPosts.pending, (state) => {
                state.status = constants.STATUS.LOADING;
                state.editPosts = [];
            })
            .addCase(fetchEditPosts.fulfilled, (state, action) => {
                state.status = constants.STATUS.SUCCESS;
                state.editPosts.splice(action.payload.i, 1, action.payload.text);
            })
            .addCase(fetchEditPosts.rejected, (state, action) => {
                state.status = constants.STATUS.FAIL
                state.editPosts = action.error.message
            })
    }
})

export default editPostSlice.reducer;
