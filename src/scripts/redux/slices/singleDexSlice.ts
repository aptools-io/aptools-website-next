import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const singleDexSlice = createSlice({
    "name": "statsProjects",
    "initialState": {
        "data": null as IApiDexSingle
    },
    "reducers": {
        "setSingleDex": (state, action: PayloadAction<IApiDexSingle>) => {
            state.data = action.payload;
        },
    }
});

export const { setSingleDex } = singleDexSlice.actions;
export default singleDexSlice.reducer;
