import * as Yup from "yup";

const schema = () => {
    return Yup.object().shape({
        password: Yup.string()
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/, "Password must contain 8 - 20 characters, at least one uppercase letter, one lowercase letter, one number and one special character:")
            .required("Please, enter your password"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Please, confirm your password")
    });
};

export default schema;
