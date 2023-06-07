import { configureStore } from "@reduxjs/toolkit";
import { loadingSlice, statsAptosSlice, statsGeneralSlice, statsProjectsSlice } from "../slices/index";

const store = configureStore({
    reducer: {
        loading: loadingSlice,
        statsAptos: statsAptosSlice,
        statsGeneral: statsGeneralSlice,
        statsProjects: statsProjectsSlice
    },
});
export default store;

export type IRootState = ReturnType<typeof store.getState>;