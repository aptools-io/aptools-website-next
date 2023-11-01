// React
import React, { useState } from "react";

// Next
import { useRouter } from "next/router";

// Redux
import { useDispatch, useSelector } from "react-redux";

// Styles
import classNames from "classnames";

// Components
import { Button, Checkbox, TextInput } from "src/components/ui";
import { FormikProvider, Form, useFormik, Field } from "formik";
import styles from "./RecoveryForm.module.scss";
import values from "./data/values";

const SignUpForm: React.FC = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const formik = useFormik(values(setLoading, setError, dispatch));

    const classes = classNames(["form__inner", "form"]);

    return (
        <FormikProvider value={formik}>
            <Form className={classes}>
                <strong className={"title"}>Forgot password?</strong>
                <div className={classNames(["form__inner--item", "form__input", { error: formik.errors.email }])}>
                    <Field name={"email"} type='text'>
                        {({ field, form, meta }) => <TextInput label={"Account email"} placeholder={"email"} error={meta.touched && meta.error} field={field} />}
                    </Field>
                </div>
                <div className={classNames(["form__inner--item-button", "form__input"])}>
                    <Button type={"submit"} invert className={"button"} disabled={!formik.isValid || loading}>
                        Send request
                    </Button>
                    {error && <span className={"form__inner--error"}>{error}</span>}
                </div>
            </Form>
        </FormikProvider>
    );
};

export default SignUpForm;
