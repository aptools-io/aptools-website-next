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
    validatorsSlice,
    notificationSlice
} from "../slices/index";



const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
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
        accounts: accountsSlice,
        validators: validatorsSlice,
    },
});
export default store;

export type IRootState = ReturnType<typeof store.getState>;