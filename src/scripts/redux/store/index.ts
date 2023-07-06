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
    singleDexSlice,
    pageTitleSlice,
    newsSlice
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
        statsAddressesTransactions: statsAddressesTransactionsSlice,
        singleDex: singleDexSlice,
        pageTitle: pageTitleSlice,
        news: newsSlice
    },
});
export default store;

export type IRootState = ReturnType<typeof store.getState>;