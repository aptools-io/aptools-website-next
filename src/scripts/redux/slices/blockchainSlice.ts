import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const blockchainSlice = createSlice({
    "name": "blockchain",
    "initialState": {
        "blockchain": null as IApiBlockchainMainData,
    },
    "reducers": {
        "setBlockchain": (state, action: PayloadAction<IApiBlockchainMainData>) => {
            state.blockchain = action.payload;
        },
    }
});

export const { 
    setBlockchain
} = blockchainSlice.actions;
export default blockchainSlice.reducer;
