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

const SetPasswordForm: React.FC = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const { id } = router.query || {};

    const formik = useFormik(values(setLoading, id));

    const classes = classNames([styles["set-password-form"], "form"]);

    return (
        <FormikProvider value={formik}>
            <Form className={classes}>
                <strong className={"title"}>Set password</strong>
                <div className={classNames([styles["set-password-form__item"], "form__input", { error: formik.errors.password }])}>
                    <Field name={"password"} type='text'>
                        {({ field, form, meta }) => <TextInput label={"Password"} placeholder={"Password"} error={meta.touched && meta.error} field={field} password />}
                    </Field>
                </div>

                <div className={classNames([styles["set-password-form__item"], "form__input", { error: formik.errors.confirmPassword }])}>
                    <Field name={"confirmPassword"} type='text'>
                        {({ field, form, meta }) => <TextInput label={"Confirm Password"} placeholder={"Confirm Password"} error={meta.touched && meta.error} field={field} password />}
                    </Field>
                </div>

                <div className={classNames([styles["set-password-form__item-button"], "form__input"])}>
                    <Button type={"submit"} invert className={styles["button"]} disabled={!formik.isValid || loading}>
                        Submit
                    </Button>
                </div>
            </Form>
        </FormikProvider>
    );
};

export default SetPasswordForm;
