import * as Yup from "yup";
import { authMiddleware } from "src/scripts/api/middleware";
import { auth } from "src/scripts/api/requests";
import { setCookie } from "cookies-next";
import { IUserResponse, loginUser } from "src/scripts/common/user";
import { showNotification } from "src/scripts/redux/slices/notificationSlice";
import { notify } from "src/scripts/common/notification";
import schema from "./schema";

const values = (forgot, router, dispatch, setLoading, id, setError, onSuccess) => {
    return {
        initialValues: {
            password: "",
            confirmPassword: ""
        },
        validationSchema: schema(),
        onSubmit: async (values, { resetForm }) => {
            setLoading(true);
            const { password } = values;

            const fetch = forgot ? auth.setNewPassword : authMiddleware.registerPasswordMiddleware;

            fetch(id, password).then((e: unknown) => {
                const response = e as IUserResponse;

                if (response?.status === "ok") {
                    if (forgot) {
                        notify(dispatch, "Successfully changed!", "test");

                        router.push("/auth/signin");
                        return;
                    }
                    loginUser(response, onSuccess);
                } else {
                    if (response.reason === "conflict") setError(forgot ? "Forgot password request by the given token is expired" : "Email is already taken or token is expired");
                    if (response.reason === "not-found") setError(forgot ? "Forgot password request by the given token not found" : "Email confirmation request by the given token not found");
                    if (response.reason === "bad-request") setError("Something went wrong");
                }
                console.log("Something went wrong");
                setLoading(false);
            });
        }
    };
};

export default values;
