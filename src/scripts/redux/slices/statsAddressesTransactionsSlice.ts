import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const statsAddressesTransactionsSlice = createSlice({
    "name": "statsAddressesTransactions",
    "initialState": {
        "addressesData": null as IApiAdressesTransactions[],
        "transactionsData": null as IApiAdressesTransactions[],
    },
    "reducers": {
        "setAddressesData": (state, action: PayloadAction<IApiAdressesTransactions[]>) => {
            state.addressesData = action.payload;
        },
        "setTransactionsData": (state, action: PayloadAction<IApiAdressesTransactions[]>) => {
            state.transactionsData = action.payload;
        },
    }
});

export const { setAddressesData, setTransactionsData } = statsAddressesTransactionsSlice.actions;
export default statsAddressesTransactionsSlice.reducer;
