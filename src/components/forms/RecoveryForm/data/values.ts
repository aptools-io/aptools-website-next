import * as Yup from "yup";
import { authMiddleware } from "src/scripts/api/middleware";
import { setConfirmData } from "src/scripts/redux/slices/authConfirmSlice";
import { getCookie, setCookie } from "cookies-next";
import { IUserResponse, loginUser } from "src/scripts/common/user";
import { auth } from "src/scripts/api/requests";
import schema from "./schema";

const values = (setLoading, setError, dispatch) => {
    return {
        initialValues: {
            email: ""
        },
        validationSchema: schema(),
        onSubmit: async (values, { resetForm }) => {
            setLoading(true);
            const { email } = values;
            auth.forgotPassword(email).then((e: unknown) => {
                const response = e as IUserResponse;

                if (response?.status === "ok") {
                    dispatch(setConfirmData({ email }));
                } else {
                    if (response.reason === "limit") setError("You have reached the limit of forgot password requests");
                    if (response.reason === "conflict") setError("User is not registered yet");
                    if (response.reason === "unauthorized") setError("Invalid email or password");
                    setLoading(false);
                }
            });
        }
    };
};

export default values;
