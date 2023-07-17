import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const accountsSlice = createSlice({
    "name": "accounts",
    "initialState": {
        "accounts": null as IApiAccount[],
        "accountsStats": null as IApiAccountsStats,
        "accountStats": null as IApiAccountStats,
        "accountProfitabilities": null as IApiAccountProfitabilities,
        "accountTransactions": null as IApiAccountTransactions,
        "accountNfts": null as IApiAccountNfts,
    },
    "reducers": {
        "setAccountsData": (state, action: PayloadAction<IApiAccount[]>) => {
            state.accounts = action.payload;
        },
        "setAccountsStatsData": (state, action: PayloadAction<IApiAccountsStats>) => {
            state.accountsStats = action.payload;
        },
        "setAccountStatsData": (state, action: PayloadAction<IApiAccountStats>) => {
            state.accountStats = action.payload;
        },
        "setAccountProfitabilitiesData": (state, action: PayloadAction<IApiAccountProfitabilities>) => {
            state.accountProfitabilities = action.payload;
        },
        "setAccountTransactionsData": (state, action: PayloadAction<IApiAccountTransactions>) => {
            state.accountTransactions = action.payload;
        },
        "setAccountNftsData": (state, action: PayloadAction<IApiAccountNfts>) => {
            state.accountNfts = action.payload;
        },
    }
});

export const { 
    setAccountsData, 
    setAccountsStatsData, 
    setAccountStatsData,
    setAccountProfitabilitiesData,
    setAccountTransactionsData,
    setAccountNftsData
} = accountsSlice.actions;
export default accountsSlice.reducer;
