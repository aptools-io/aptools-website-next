import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const pageTitleSlice = createSlice({
    name: "pageTitle",
    initialState: {
        title: null as string,
        type: null as string
    },
    reducers: {
        setPageTitle: (state, action: PayloadAction<string>) => {
            state.title = action.payload;
            state.type = null;
        },
        setPageType: (state, action: PayloadAction<string>) => {
            state.type = action.payload;
        }
    }
});

export const { setPageTitle, setPageType } = pageTitleSlice.actions;
export default pageTitleSlice.reducer;
