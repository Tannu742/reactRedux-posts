import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api, { getMethod } from '../../utils/api';

const initialState = {
    photo: [],
    status: 'idle',
    error: ''
}
export const fetchPhoto = createAsyncThunk('photo/fetchPhoto', async (albumId) => {
    return await getMethod(`${api.photos}?albumId=${albumId}`).then(({ data }) => data);
})

const photoSlice = createSlice({
    name: 'Photo',
    initialState,
    extraReducers(builder) {
        builder
            .addCase(fetchPhoto.pending, (state) => {
                state.status = 'loading';
                state.photo = [];
            })
            .addCase(fetchPhoto.fulfilled, (state, action) => {
                state.status = 'success';
                console.log(action.payload, '============== action.payload ===========');
                state.photo = action.payload || [];
            })
            .addCase(fetchPhoto.rejected, (state, action) => {
                state.status = 'fail';
                state.photo = action.error.message || [];
            })
    }
});

export default photoSlice.reducer;
