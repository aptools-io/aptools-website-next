import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const userNotificationsSlice = createSlice({
    name: "userNotificationsSlice",
    initialState: {
        notifications: null as IApiUserNotifications
    },
    reducers: {
        setNotifications: (state, action: PayloadAction<IApiUserNotifications>) => {
            state.notifications = action.payload;
        }
    }
});

export const { setNotifications } = userNotificationsSlice.actions;
export default userNotificationsSlice.reducer;
