import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


const notificationSlice = createSlice({
    "name": "notification",
    "initialState": {
        "notifications": []
    },
    "reducers": {
        "showNotification": (state, action: PayloadAction<{ text: string; type: string }>) => {
            state.notifications.push(action.payload);
        },
        "hideNotification": (state, action: PayloadAction) => {
            if(state.notifications.length > 0)
                state.notifications[0].hide = true;
        },
        "clearLastNotification": (state, action: PayloadAction) => {
            if(state.notifications.length > 0)
                state.notifications.splice(0, 1);
        },
    }
});

export const { showNotification, hideNotification, clearLastNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
