// React
import React from "react";

// Components
import { Grid, GridWrapper, Topper } from "src/components/general";
import { Validators } from "src/components/containers";
import { ValidatorsList } from "src/components/lists";

const ValidatorsPage: React.FC = () => {

    return (
        <>
            <Validators />
            <Grid>
                <GridWrapper>
                    <ValidatorsList />
                </GridWrapper>
            </Grid>
        </>
    );
};


export default ValidatorsPage;
