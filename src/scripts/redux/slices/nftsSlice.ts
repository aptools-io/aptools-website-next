import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const nftsSlice = createSlice({
    "name": "nfts",
    "initialState": {
        "nftsLoading": false,
        "nftsCollectionList": null as IApiNftCollectionList,
        "nftsCollectionListInventories": null as IApiNftCollectionInventories[],
        "nftsCollectionGeneralInfo": null as IApiNftCollectionGeneralInfo,
        "nftsCollectionTransfers": null as IApiNftCollectionTransfer[],
        "nftsCollectionHolders": null as IApiNftCollectionHolder[],
        "nftsCollectionPendingClaims": null as IApiNftCollectionPendingClaims,
        "nftsCollectionListInventory": null as IApiNftCollectionInventories,
    },
    "reducers": {
        "setNftsLoading": (state, action: PayloadAction<boolean>) => {
            state.nftsLoading = action.payload;
        },
        "setNftsCollectionList": (state, action: PayloadAction<IApiNftCollectionList>) => {
            state.nftsCollectionList = action.payload;
        },
        "setNftsCollectionGeneralInfo": (state, action: PayloadAction<IApiNftCollectionGeneralInfo>) => {
            state.nftsCollectionGeneralInfo = action.payload;
        },
        "setNftsCollectionTransfers": (state, action: PayloadAction<IApiNftCollectionTransfer[]>) => {
            state.nftsCollectionTransfers = action.payload;
        },
        "setNftsCollectionHolders": (state, action: PayloadAction<IApiNftCollectionHolder[]>) => {
            state.nftsCollectionHolders = action.payload;
        },
        "setNftsCollectionPendingClaims": (state, action: PayloadAction<IApiNftCollectionPendingClaims>) => {
            state.nftsCollectionPendingClaims = action.payload;
        },
        "setNftsCollectionInventory": (state, action: PayloadAction<IApiNftCollectionInventories>) => {
            state.nftsCollectionListInventory = action.payload;
        },
        "setNftsCollectionListInventories": (state, action: PayloadAction<IApiNftCollectionInventories[]>) => {
            state.nftsCollectionListInventories = action.payload;
        },
    }
});

export const { 
    setNftsLoading,
    setNftsCollectionList,
    setNftsCollectionGeneralInfo,
    setNftsCollectionTransfers,
    setNftsCollectionHolders,
    setNftsCollectionPendingClaims,
    setNftsCollectionInventory,
    setNftsCollectionListInventories
} = nftsSlice.actions;
export default nftsSlice.reducer;
