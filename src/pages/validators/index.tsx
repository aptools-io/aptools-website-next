// React
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

// Components
import { ValidatorsPage } from "src/components/pages";

// API
import { accounts, validators } from "src/scripts/api/requests";

// Redux
import { setPageTitle } from "src/scripts/redux/slices/pageTitleSlice";
import {
    setValidators,
    setValidatorsBlocks,
    setValidatorsLocations
} from "src/scripts/redux/slices/validatorsSlice";

const Validators = (data: IApiProps) => {
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(data);
        dispatch(setValidatorsLocations(data.validators_locations) || null);
        dispatch(setValidatorsBlocks(data.validators_blocks) || null);
        dispatch(setValidators(data.validators) || null);
        dispatch(setPageTitle("Validators"));
    }, [data, dispatch]);

    return <ValidatorsPage />;
};

export default Validators;

export async function getServerSideProps(context) {
    const { req } = context;
    return {
        props: {
            headers: req.headers,
            validators_locations: await validators.getValidatorsLocationsData(),
            validators_blocks: await accounts.getAccountResourceData(
                "0x1",
                "0x1::stake::ValidatorPerformance"
            ),
            validators: await accounts.getAccountResourceData(
                "0x1",
                "0x1::stake::ValidatorSet"
            )
        }
    };
}
