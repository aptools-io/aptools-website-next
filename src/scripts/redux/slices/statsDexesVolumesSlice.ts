import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const statsDexesVolumesSlice = createSlice({
    "name": "statsProjects",
    "initialState": {
        "data": null as IApiDexVolume[]
    },
    "reducers": {
        "setDexesVolumesStatsData": (state, action: PayloadAction<IApiDexVolume[]>) => {
            state.data = action.payload;
        },
    }
});

export const { setDexesVolumesStatsData } = statsDexesVolumesSlice.actions;
export default statsDexesVolumesSlice.reducer;
