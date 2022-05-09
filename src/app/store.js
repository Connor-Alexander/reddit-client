import { configureStore } from "@reduxjs/toolkit";
import refreshReducer from "../features/Refresh/refreshSlice";

export const store = configureStore({
    reducer: {
        refresh: refreshReducer
    }
})
