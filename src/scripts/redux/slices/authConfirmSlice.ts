import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const authConfirmSlice = createSlice({
    name: "news",
    initialState: {
        email: "",
        agreement: false,
        subscribe: false
    },
    reducers: {
        setConfirmData: (state, action: PayloadAction<{ email: string; agreement: boolean; subscribe: boolean }>) => {
            state.email = action.payload?.email || "";
            state.agreement = action.payload?.agreement || false;
            state.subscribe = action.payload?.subscribe || false;
        }
    }
});

export const { setConfirmData } = authConfirmSlice.actions;
export default authConfirmSlice.reducer;
