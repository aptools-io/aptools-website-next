import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const eventsSlice = createSlice({
    name: "events",
    initialState: {
        eventsData: null as IApiEvent[]
    },
    reducers: {
        setEventsData: (state, action: PayloadAction<IApiEvent[]>) => {
            state.eventsData = action.payload || null;
        }
    }
});

export const { setEventsData } = eventsSlice.actions;
export default eventsSlice.reducer;
