import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const pageTitleSlice = createSlice({
    "name": "pageTitle",
    "initialState": {
        "title": null as any
    },
    "reducers": {
        "setPageTitle": (state, action: PayloadAction<string>) => {
            state.title = action.payload;
        },
    }
});

export const { setPageTitle } = pageTitleSlice.actions;
export default pageTitleSlice.reducer;
