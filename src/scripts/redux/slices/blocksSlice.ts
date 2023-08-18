import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const blocksSlice = createSlice({
    "name": "blocks",
    "initialState": {
        "blocks": null as IApiBlock[],
        "block": null as IApiBlock
    },
    "reducers": {
        "setBlocks": (state, action: PayloadAction<IApiBlock[]>) => {
            state.blocks = action.payload;
        },
        "setBlock": (state, action: PayloadAction<IApiBlock>) => {
            state.block = action.payload;
        },
    }
});

export const { 
    setBlocks,
    setBlock
} = blocksSlice.actions;
export default blocksSlice.reducer;
