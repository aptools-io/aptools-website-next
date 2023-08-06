// React
import React from "react";

// Next
import { useRouter } from "next/router";

// Components
import { Topper } from "src/components/general";
import { StatsSingleValidator } from "src/components/containers";


const ValidatorsSinglePage: React.FC = () => {
    const router = useRouter();
    const title = router.query.id;

    
    return (
        <>
            <Topper 
                backlink={"/validators"} 
                customTitle={title} 
                additiveTitle={` #${0}`}
            />
            <StatsSingleValidator />
            {/* <Grid>
                <GridWrapper>
                    <Transaction />
                </GridWrapper>
            </Grid> */}
            {/* <TransactionsList full title="" /> */}
        </>
    );
};


export default ValidatorsSinglePage;
