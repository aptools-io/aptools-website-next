import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const statsProjectsSlice = createSlice({
    "name": "statsProjects",
    "initialState": {
        "data": null as IApiProject[]
    },
    "reducers": {
        "setProjectStatsData": (state, action: PayloadAction<IApiProject[]>) => {
            state.data = action.payload;
        },
    }
});

export const { setProjectStatsData } = statsProjectsSlice.actions;
export default statsProjectsSlice.reducer;
