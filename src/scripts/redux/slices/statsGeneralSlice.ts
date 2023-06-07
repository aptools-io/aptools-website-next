import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const statsGeneralSlice = createSlice({
    "name": "statsGeneral",
    "initialState": {
        "data": null as IApiGeneralStats
    },
    "reducers": {
        "setGeneralStatsData": (state, action: PayloadAction<IApiGeneralStats>) => {
            state.data = action.payload;
        },
    }
});

export const { setGeneralStatsData } = statsGeneralSlice.actions;
export default statsGeneralSlice.reducer;
