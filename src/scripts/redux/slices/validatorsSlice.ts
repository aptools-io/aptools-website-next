import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const validatorsSlice = createSlice({
    "name": "validators",
    "initialState": {
        "validatorsLocations": null as IApiValidatorLocation[],
        "validatorsBlocks": null as IApiValidatorsBlocks,
        "validators": null as IApiValidators,
    },
    "reducers": {
        "setValidatorsLocations": (state, action: PayloadAction<IApiValidatorLocation[]>) => {
            state.validatorsLocations = action.payload;
        },
        "setValidatorsBlocks": (state, action: PayloadAction<IApiValidatorsBlocks>) => {
            state.validatorsBlocks = action.payload;
        },
        "setValidators": (state, action: PayloadAction<IApiValidators>) => {
            state.validators = action.payload;
        },
    }
});

export const { 
    setValidatorsLocations,
    setValidatorsBlocks,
    setValidators
} = validatorsSlice.actions;
export default validatorsSlice.reducer;
