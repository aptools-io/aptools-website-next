import * as Yup from "yup";

const schema = () => {
    return Yup.object().shape({
        email: Yup.string()
            .matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Invalid email")
            .email("Invalid email")
            .required("Please, enter your email"),
        agreement: Yup.bool().oneOf([true], "Please, accept the agreement")
    });
};

export default schema;
