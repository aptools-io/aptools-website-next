import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const userApiKeysSlice = createSlice({
    name: "userApiKeysSlice",
    initialState: {
        apiKeys: null as IApiUserApiKeys
    },
    reducers: {
        setApiKeys: (state, action: PayloadAction<IApiUserApiKeys>) => {
            state.apiKeys = action.payload;
        }
    }
});

export const { setApiKeys } = userApiKeysSlice.actions;
export default userApiKeysSlice.reducer;
