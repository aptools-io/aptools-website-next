import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const statsProjectsSlice = createSlice({
    "name": "statsProjects",
    "initialState": {
        "data": null as IApiProject[],
        "project": null as IApiProject,
        "otherProjects": null as IApiProject[],
    },
    "reducers": {
        "setProjectStatsData": (state, action: PayloadAction<IApiProject[]>) => {
            state.data = action.payload;
        },
        "setProjectData": (state, action: PayloadAction<IApiProject>) => {
            state.project = action.payload;
        },
        "setOtherProjectsData": (state, action: PayloadAction<IApiProject[]>) => {
            state.otherProjects = action.payload;
        },
    }
});

export const { 
    setProjectStatsData,
    setProjectData,
    setOtherProjectsData
} = statsProjectsSlice.actions;
export default statsProjectsSlice.reducer;
