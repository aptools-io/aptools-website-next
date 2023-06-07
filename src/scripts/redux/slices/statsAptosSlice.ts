import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const statsAptosSlice = createSlice({
    "name": "statsAptos",
    "initialState": {
        "data": null as IWSocketStats
    },
    "reducers": {
        "setAptosStatsData": (state, action: PayloadAction<IWSocketStats>) => {
            state.data = action.payload;
        },
    }
});

export const { setAptosStatsData } = statsAptosSlice.actions;
export default statsAptosSlice.reducer;
