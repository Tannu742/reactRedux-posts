import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import api, { deleteMethod } from "../../utils/api"

const initialState = {
    isDeleted: false,
    status: 'idle',
    error: ''
}
export const fetchDeletePosts = createAsyncThunk('posts/fetchDeletePosts', async (id) => {
    return await deleteMethod(`${api.posts}/${id}`).then(({ status }) => status === 200)
})
const deleteSlice = createSlice({
    name: 'deletePosts',
    initialState,
    extraReducers(builder) {
        builder
            .addCase(fetchDeletePosts.fulfilled, (state, action) => {
                state.isDeleted = action.payload;
            })
    }
})

export default deleteSlice.reducer;