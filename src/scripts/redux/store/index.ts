import { configureStore } from "@reduxjs/toolkit";
import { 
    headersSlice,
    loadingSlice, 
    statsAptosSlice, 
    statsGeneralSlice, 
    statsTransactions,
    statsProjectsSlice, 
    statsDexesVolumesSlice,
    statsAddressesTransactionsSlice,
} from "../slices/index";

const store = configureStore({
    reducer: {
        headers: headersSlice,
        loading: loadingSlice,
        statsAptos: statsAptosSlice,
        statsGeneral: statsGeneralSlice,
        statsProjects: statsProjectsSlice,
        statsTransactions,
        statsDexesVolumes: statsDexesVolumesSlice,
        statsAddressesTransactions: statsAddressesTransactionsSlice
    },
});
export default store;

export type IRootState = ReturnType<typeof store.getState>;