import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const nftsSlice = createSlice({
    "name": "nfts",
    "initialState": {
        "nftsCollectionList": null as IApiNftCollectionList,
        "nftsCollectionListInventories": null as IApiNftCollectionInventories[]
    },
    "reducers": {
        "setNftsCollectionList": (state, action: PayloadAction<IApiNftCollectionList>) => {
            state.nftsCollectionList = action.payload;
        },
        "setNftsCollectionListInventories": (state, action: PayloadAction<IApiNftCollectionInventories[]>) => {
            state.nftsCollectionListInventories = action.payload;
        },
    }
});

export const { 
    setNftsCollectionList,
    setNftsCollectionListInventories
} = nftsSlice.actions;
export default nftsSlice.reducer;
