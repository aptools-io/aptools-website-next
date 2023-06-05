import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


const loadingSlice = createSlice({
    "name": "loading",
    "initialState": {
        "loading": {
            start: false,
            end: false
        },
    },
    "reducers": {
        "setLoading": (state, action: PayloadAction<ILoading>) => {
            state.loading = action.payload;
        },
    }
});

export const { setLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
