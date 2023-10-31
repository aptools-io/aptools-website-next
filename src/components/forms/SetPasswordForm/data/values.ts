import * as Yup from "yup";
import { auth } from "src/scripts/api/requests";
import { setCookie } from "cookies-next";
import schema from "./schema";

const values = (setLoading, id) => {
    return {
        initialValues: {
            password: "",
            confirmPassword: ""
        },
        validationSchema: schema(),
        onSubmit: async (values, { resetForm }) => {
            setLoading(true);
            const { password } = values;

            auth.registerPassword(id, password).then((e: unknown) => {
                const response = e as {
                    status: string;
                    data: IApiUser;
                };

                if (response?.status === "ok") {
                    //dispatch(setConfirmData({ email, agreement, subscribe }));'
                    const { data } = response;
                    setCookie("user", JSON.stringify(data));
                    setLoading(false);
                    return;
                }
                console.log("Something went wrong");
                setLoading(false);
            });
            const { passowrd, confirmPassword } = values;
            console.log(values);
        }
    };
};

export default values;
