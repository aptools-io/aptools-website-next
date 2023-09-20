// React
import React, { useEffect, useRef } from "react";

// Redux
import { useDispatch } from "react-redux";
import { setHeaders } from "src/scripts/redux/slices/headersSlice";
import {
    setPageTitle,
    setPageType
} from "src/scripts/redux/slices/pageTitleSlice";

// Components
import { ValidatorsSinglePage } from "src/components/pages";

// Redux
import {
    setValidator,
    setValidators
} from "src/scripts/redux/slices/validatorsSlice";

// API
import { accounts } from "src/scripts/api/requests";

const ValidatorsId = (data: IApiProps) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setHeaders(data.headers) || null);
        dispatch(setPageTitle("Validator"));
        dispatch(setValidator(data.validator) || null);
        dispatch(setValidators(data.validators) || null);
        dispatch(setPageType("Validator"));
    }, [data, dispatch]);

    return <ValidatorsSinglePage />;
};
export default ValidatorsId;

export async function getServerSideProps(context) {
    const { req, query } = context;
    const { id } = query || {};

    const validator = await accounts.getAccountConfigPoolData(id);

    if (!validator)
        return {
            notFound: true
        };

    return {
        props: {
            headers: req.headers,
            validator,
            validators: await accounts.getAccountResourceData(
                "0x1",
                "0x1::stake::ValidatorSet"
            )
        }
    };
}
