import { configureStore } from "@reduxjs/toolkit";
import { loadingSlice } from "../slices/index";

const store = configureStore({
    reducer: {
        loading: loadingSlice,
    },
});
export default store;

export type IRootState = ReturnType<typeof store.getState>;