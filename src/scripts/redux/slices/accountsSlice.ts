import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const accountsSlice = createSlice({
    "name": "accounts",
    "initialState": {
        "accounts": null as IApiAccount[],
        "accountsStats": null as IApiAccountsStats,
    },
    "reducers": {
        "setAccountsData": (state, action: PayloadAction<IApiAccount[]>) => {
            state.accounts = action.payload;
        },
        "setAccountsStatsData": (state, action: PayloadAction<IApiAccountsStats>) => {
            state.accountsStats = action.payload;
        },
    }
});

export const { setAccountsData, setAccountsStatsData } = accountsSlice.actions;
export default accountsSlice.reducer;
