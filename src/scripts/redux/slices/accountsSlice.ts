import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const accountsSlice = createSlice({
    "name": "accounts",
    "initialState": {
        "accountsWallets": null as IApiAccountsWallets,
        "accountStats": null as IApiAccountStats,
        "accountProfitabilities": null as IApiAccountProfitabilities,
        "accountTransactions": null as IApiAccountTransactions,
        "accountTokens": null as any,
        "accountNfts": null as IApiAccountNfts[],
    },
    "reducers": {
        "setAccountsWalletsData": (state, action: PayloadAction<IApiAccountsWallets>) => {
            state.accountsWallets = action.payload;
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
        "setAccountTokensData": (state, action: PayloadAction<any>) => {
            state.accountTokens = action.payload;
        },
        "setAccountNftsData": (state, action: PayloadAction<IApiAccountNfts[]>) => {
            state.accountNfts = action.payload;
        },
    }
});

export const { 
    setAccountsWalletsData, 
    setAccountStatsData,
    setAccountProfitabilitiesData,
    setAccountTransactionsData,
    setAccountTokensData,
    setAccountNftsData
} = accountsSlice.actions;
export default accountsSlice.reducer;
