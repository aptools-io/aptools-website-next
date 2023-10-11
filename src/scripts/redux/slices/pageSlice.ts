import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const pageSlice = createSlice({
    name: "page",
    initialState: {
        path: "/"
    },
    reducers: {
        setPagePath: (state, action: PayloadAction<string>) => {
            state.path = action.payload;
        }
    }
});

export const { setPagePath } = pageSlice.actions;
export default pageSlice.reducer;
