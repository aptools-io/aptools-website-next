// React
import React from "react";

// Next
import { useRouter } from "next/router";

// Components
import { Grid, GridWrapper, Topper } from "src/components/general";
import { StatsSingleValidator, Validator } from "src/components/containers";
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";


const ValidatorsSinglePage: React.FC = () => {
    const router = useRouter();
    const title = router?.query?.id;
    const { validator } = useSelector((state: IRootState) => state.validators);
    const { validator_index } = validator?.[2]?.data || {}

    
    return (
        <>
            <Topper 
                backlink={"/validators"} 
                customTitle={title} 
                additiveTitle={` #${validator_index}`}
            />
            <StatsSingleValidator />
            
            <Grid>
                <GridWrapper>
                    <Validator />
                </GridWrapper>
            </Grid>
            {/* <TransactionsList full title="" /> */}
        </>
    );
};


export default ValidatorsSinglePage;
