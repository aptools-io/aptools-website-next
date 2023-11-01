import * as Yup from "yup";
import { auth } from "src/scripts/api/requests";
import { setConfirmData } from "src/scripts/redux/slices/authConfirmSlice";
import schema from "./schema";

const values = (setLoading, dispatch, setError) => {
    return {
        initialValues: {
            email: "",
            agreement: false,
            subscribe: true
        },
        validationSchema: schema(),
        onSubmit: async (values, { resetForm }) => {
            setLoading(true);
            const { email, agreement, subscribe } = values;

            auth.registerEmail(email, agreement, subscribe).then((e: unknown) => {
                const response = e as {
                    status: string;
                    reason: string;
                };

                if (response?.status === "ok") {
                    dispatch(setConfirmData({ email, agreement, subscribe }));
                    setLoading(false);
                    return;
                }
                if (response.reason === "conflict") setError("Email is already taken");
                if (response.reason === "bad-request") setError("Something went wrong");

                setLoading(false);
            });
        }
    };
};

export default values;
