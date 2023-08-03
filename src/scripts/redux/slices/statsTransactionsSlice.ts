import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const statsTransactionsSlice = createSlice({
    "name": "statsTransactions",
    "initialState": {
        "data": null as IApiTransaction[],
        "transaction": null as IApiTransactionInfo
    },
    "reducers": {
        "setCoinTransactions": (state, action: PayloadAction<IApiTransaction[]>) => {
            state.data = action.payload;
        },
        "setTransaction": (state, action: PayloadAction<IApiTransactionInfo>) => {
            state.transaction = action.payload;
        },
    }
});

export const { setCoinTransactions, setTransaction } = statsTransactionsSlice.actions;
export default statsTransactionsSlice.reducer;
