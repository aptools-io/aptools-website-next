import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const statsTransactionsSlice = createSlice({
    "name": "statsTransactions",
    "initialState": {
        "data": [] as IApiTransaction[]
    },
    "reducers": {
        "setCoinTransactions": (state, action: PayloadAction<IApiTransaction[]>) => {
            state.data = action.payload;
        },
    }
});

export const { setCoinTransactions } = statsTransactionsSlice.actions;
export default statsTransactionsSlice.reducer;
