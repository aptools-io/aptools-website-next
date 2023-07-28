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
    newsSlice,
    accountsSlice,
    notificationSlice
} from "../slices/index";

const store = configureStore({
    reducer: {
        headers: headersSlice,
        loading: loadingSlice,
        notification: notificationSlice,
        statsAptos: statsAptosSlice,
        statsGeneral: statsGeneralSlice,
        statsProjects: statsProjectsSlice,
        statsTransactions,
        statsDexesVolumes: statsDexesVolumesSlice,
        statsAddressesTransactions: statsAddressesTransactionsSlice,
        singleDex: singleDexSlice,
        pageTitle: pageTitleSlice,
        news: newsSlice,
        accounts: accountsSlice
    },
});
export default store;

export type IRootState = ReturnType<typeof store.getState>;