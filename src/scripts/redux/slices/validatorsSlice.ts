import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const validatorsSlice = createSlice({
    "name": "validators",
    "initialState": {
        "validatorsLocations": null as IApiValidatorLocation[],
        "validatorsBlocks": null as IApiValidatorsBlocks,
        "validators": null as IApiValidators,
        "validator": null as [IApiValidators, IApiValidators, IApiValidators],
        "validatorTransactions": null as IApiTransactionInfo[],
        "validatorTransactionsLoading": false
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
        "setValidator": (state, action: PayloadAction<[IApiValidators, IApiValidators, IApiValidators]>) => {
            state.validator = action.payload;
        },
        "setValidatorTransactions": (state, action: PayloadAction<IApiTransactionInfo[]>) => {
            state.validatorTransactions = action.payload;
        },
        "setValidatorTransactionsLoading": (state, action: PayloadAction<boolean>) => {
            state.validatorTransactionsLoading = action.payload;
        },
    }
});

export const { 
    setValidatorsLocations,
    setValidatorsBlocks,
    setValidators,
    setValidator,
    setValidatorTransactions,
    setValidatorTransactionsLoading
} = validatorsSlice.actions;
export default validatorsSlice.reducer;
