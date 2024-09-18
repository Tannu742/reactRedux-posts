import { configureStore } from "@reduxjs/toolkit";
import PostSlice from "../features/posts/postSlice";
import photoReducer from "../features/photos/photoSlice";
import deletePostReducer from "../features/posts/deleteSlice";
import editPostReducer from "../features/posts/updateSlice";
import singlePostReducer from "../features/posts/singleSlice";

export const store = configureStore({
    reducer:{
        posts: PostSlice,
        photoReducer,
        deletePostReducer,
        editPostReducer,
        singlePostReducer
    }
})
