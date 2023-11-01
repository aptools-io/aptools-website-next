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
import styles from "./SetPasswordForm.module.scss";
import values from "./data/values";

const SetPasswordForm: React.FC<{ forgot?: boolean }> = ({ forgot = false }) => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const dispatch = useDispatch();

    const { id } = router.query || {};

    const formik = useFormik(
        values(forgot, router, dispatch, setLoading, id, setError, async (saveUserInStorage) => {
            await saveUserInStorage();
            await router.push("/account/profile");
        })
    );

    const classes = classNames(["form__inner", "form"]);

    return (
        <FormikProvider value={formik}>
            <Form className={classes}>
                <strong className={"title"}>{forgot ? "Set new password" : "Set password"}</strong>
                <div className={classNames(["form__inner--item", "form__input", { error: formik.errors.password }])}>
                    <Field name={"password"} type='text'>
                        {({ field, form, meta }) => <TextInput label={"Password"} placeholder={"Password"} error={meta.touched && meta.error} field={field} password />}
                    </Field>
                </div>

                <div className={classNames(["form__inner--item", "form__input", { error: formik.errors.confirmPassword }])}>
                    <Field name={"confirmPassword"} type='text'>
                        {({ field, form, meta }) => <TextInput label={"Confirm Password"} placeholder={"Confirm Password"} error={meta.touched && meta.error} field={field} password />}
                    </Field>
                </div>

                <div className={classNames(["form__inner--item-button", "form__input"])}>
                    <Button type={"submit"} invert className={"button"} disabled={!formik.isValid || loading}>
                        Submit
                    </Button>
                    {error && <span className={"form__inner--error"}>{error}</span>}
                </div>
            </Form>
        </FormikProvider>
    );
};

export default SetPasswordForm;
