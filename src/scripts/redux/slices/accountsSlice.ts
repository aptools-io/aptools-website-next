import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const accountsSlice = createSlice({
    name: "accounts",
    initialState: {
        accountsLoading: false,
        accountsWallets: null as IApiAccountsWallets,
        accountsNftWallets: null as IApiNftWallet[],
        accountStats: null as IApiAccountStats,
        accountProfitabilities: null as IApiAccountProfitabilities,
        accountTransactions: null as IApiAccountTransactions,
        accountTokens: null as IApiAccountTokens,
        accountNftsCollections: null as IApiAccountNftCollections,
        accountResources: null as IApiAccountResource[],
        accountInfo: null as IApiAccountInfo
    },
    reducers: {
        setAccountsLoading: (state, action: PayloadAction<boolean>) => {
            state.accountsLoading = action.payload;
        },
        setAccountsWalletsData: (state, action: PayloadAction<IApiAccountsWallets>) => {
            state.accountsWallets = action.payload;
        },
        setAccountsNftWalletsData: (state, action: PayloadAction<IApiNftWallet[]>) => {
            state.accountsNftWallets = action.payload;
        },
        setAccountStatsData: (state, action: PayloadAction<IApiAccountStats>) => {
            state.accountStats = action.payload;
        },
        setAccountProfitabilitiesData: (state, action: PayloadAction<IApiAccountProfitabilities>) => {
            state.accountProfitabilities = action.payload;
        },
        setAccountTransactionsData: (state, action: PayloadAction<IApiAccountTransactions>) => {
            state.accountTransactions = action.payload;
        },
        setAccountTokensData: (state, action: PayloadAction<IApiAccountTokens>) => {
            state.accountTokens = action.payload;
        },
        setAccountNftsCollectionsData: (state, action: PayloadAction<IApiAccountNftCollections>) => {
            state.accountNftsCollections = action.payload;
        },
        setAccountResourcesData: (state, action: PayloadAction<IApiAccountResource[]>) => {
            state.accountResources = action.payload;
        },
        setAccountInfoData: (state, action: PayloadAction<IApiAccountInfo>) => {
            state.accountInfo = action.payload;
        }
    }
});

export const { setAccountsLoading, setAccountsWalletsData, setAccountsNftWalletsData, setAccountStatsData, setAccountProfitabilitiesData, setAccountTransactionsData, setAccountTokensData, setAccountNftsCollectionsData, setAccountResourcesData, setAccountInfoData } = accountsSlice.actions;
export default accountsSlice.reducer;
