import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const headersSlice = createSlice({
    "name": "headers",
    "initialState": {
        "data": null as any
    },
    "reducers": {
        "setHeaders": (state, action: PayloadAction<any>) => {
            state.data = action.payload;
        },
    }
});

export const { setHeaders } = headersSlice.actions;
export default headersSlice.reducer;
