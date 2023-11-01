import * as Yup from "yup";
import { authMiddleware } from "src/scripts/api/middleware";
import { setConfirmData } from "src/scripts/redux/slices/authConfirmSlice";
import { getCookie, setCookie } from "cookies-next";
import { IUserResponse, loginUser } from "src/scripts/common/user";
import schema from "./schema";

const values = (setLoading, setError, onSuccess) => {
    return {
        initialValues: {
            email: "",
            password: "",
            captcha: true
        },
        validationSchema: schema(),
        onSubmit: async (values, { resetForm }) => {
            setLoading(true);
            const { email, password } = values;
            authMiddleware.loginMiddleware(email, password).then((e) => {
                const response = e as IUserResponse;

                if (response?.status === "ok") {
                    loginUser(response, onSuccess);
                } else {
                    console.log(response);
                    if (response.reason === "conflict") setError("User is not registered yet");
                    if (response.reason === "unauthorized") setError("Invalid email or password");
                    setLoading(false);
                }
            });
        }
    };
};

export default values;
