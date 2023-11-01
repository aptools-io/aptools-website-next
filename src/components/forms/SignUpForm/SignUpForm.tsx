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
import styles from "./SignUpForm.module.scss";
import values from "./data/values";

const SignUpForm: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const formik = useFormik(values(setLoading, dispatch, setError));

    const classes = classNames(["form__inner", "form"]);

    return (
        <FormikProvider value={formik}>
            <Form className={classes}>
                <strong className={"title"}>Sign up</strong>
                <div className={classNames(["form__inner--item", "form__input", { error: formik.errors.email }])}>
                    <Field name={"email"} type='text'>
                        {({ field, form, meta }) => <TextInput label={"Account email"} placeholder={"email"} error={meta.touched && meta.error} field={field} />}
                    </Field>
                </div>
                <div className={classNames(["form__inner--item", "form__input", { error: formik.errors.agreement }])}>
                    <Field name={"agreement"} type='checkbox'>
                        {({ field, form, meta }) => <Checkbox id={"id-agree"} label={"I agree to the Terms & Conditions and Privacy Policy"} error={meta.touched && meta.error} field={field} />}
                    </Field>
                </div>
                <div className={classNames(["form__inner--item", "form__input", { error: formik.errors.subscribe }])}>
                    <Field name={"subscribe"} type='checkbox'>
                        {({ field, form, meta }) => <Checkbox id={"id-subscribe"} label={"Subscribe to receive company news and product updates from Aptools. You may unsubscribe at any time"} error={meta.touched && meta.error} field={field} />}
                    </Field>
                </div>
                <div className={classNames(["form__inner--item-button", "form__input"])}>
                    <Button type={"submit"} invert className={"button"} disabled={!formik.isValid || loading}>
                        Sign up
                    </Button>
                    {error && <span className={"form__inner--error"}>{error}</span>}
                </div>
            </Form>
        </FormikProvider>
    );
};

export default SignUpForm;
