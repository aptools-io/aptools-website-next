import * as Yup from "yup";

const schema = () => {
    return Yup.object().shape({
        email: Yup.string()
            .matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Invalid email")
            .email("Invalid email")
            .required("Please, enter your email"),
        password: Yup.string()
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/, "Password must contain 8 - 20 characters, at least one uppercase letter, one lowercase letter, one number and one special character:")
            .required("Please, enter your password")
    });
};

export default schema;
