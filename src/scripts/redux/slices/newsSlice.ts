import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const newsSlice = createSlice({
    "name": "news",
    "initialState": {
        "data": null as IApiProject[]
    },
    "reducers": {
        "setNewsData": (state, action: PayloadAction<IApiProject[]>) => {
            state.data = action.payload;
        },
    }
});

export const { setNewsData } = newsSlice.actions;
export default newsSlice.reducer;
