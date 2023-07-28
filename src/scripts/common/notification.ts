import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { TAdaptive } from "src/types/common/adaptive";
import { clearLastNotification, hideNotification, showNotification } from "../redux/slices/notificationSlice";

const notify = (dispatch: Dispatch<AnyAction>, text: string, type: string): any => {
    dispatch(showNotification({ text, type }));

    setTimeout(() => {
        dispatch(hideNotification());
    }, 3500);

    setTimeout(() => {
        dispatch(clearLastNotification());
    }, 3800);
};

export { notify };