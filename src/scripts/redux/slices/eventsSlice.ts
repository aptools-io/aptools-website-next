import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ISearchEventsData {
    clicked: boolean;
    searchText: string;
    startDate: string;
    endDate: string;
    paidOrFree: number;
    categoryIds: number[];
}

const eventsSlice = createSlice({
    name: "events",
    initialState: {
        eventsData: null as IApiEvents,
        eventData: null as IApiEventSingle,
        eventsCategoriesData: null as IApiEventCategory[],
        searchLoading: false,
        searchEventsData: {
            clicked: false,
            searchText: "",
            startDate: null,
            endDate: null,
            paidOrFree: null,
            categoryIds: null
        }
    },
    reducers: {
        setEventsData: (state, action: PayloadAction<IApiEvents>) => {
            state.eventsData = action.payload || null;
        },
        setEventsCategoriesData: (
            state,
            action: PayloadAction<IApiEventCategory[]>
        ) => {
            state.eventsCategoriesData = action.payload || null;
        },
        setEventsSearchData: (
            state,
            action: PayloadAction<ISearchEventsData>
        ) => {
            state.searchEventsData = action.payload || null;
        },
        setEventsSearchLoading: (state, action: PayloadAction<boolean>) => {
            state.searchLoading = action.payload || null;
        },
        setEventData: (state, action: PayloadAction<IApiEventSingle>) => {
            state.eventData = action.payload || null;
        }
    }
});

export const {
    setEventsData,
    setEventsCategoriesData,
    setEventsSearchData,
    setEventsSearchLoading,
    setEventData
} = eventsSlice.actions;
export default eventsSlice.reducer;
