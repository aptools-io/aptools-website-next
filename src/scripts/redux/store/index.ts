import { configureStore } from "@reduxjs/toolkit";
import { 
    loadingSlice, 
    statsAptosSlice, 
    statsGeneralSlice, 
    statsProjectsSlice, 
    statsDexesVolumesSlice,
    statsAddressesTransactionsSlice
} from "../slices/index";

const store = configureStore({
    reducer: {
        loading: loadingSlice,
        statsAptos: statsAptosSlice,
        statsGeneral: statsGeneralSlice,
        statsProjects: statsProjectsSlice,
        statsDexesVolumes: statsDexesVolumesSlice,
        statsAddressesTransactions: statsAddressesTransactionsSlice
    },
});
export default store;

export type IRootState = ReturnType<typeof store.getState>;