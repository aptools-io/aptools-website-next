// React
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import { StatsSingleBlock } from "src/components/containers";
import { Grid, GridWrapper, Topper } from "src/components/general";
import { BlocksList } from "src/components/lists";
import { IRootState } from "src/scripts/redux/store";

const BlocksSinglePage: React.FC = () => {
    const router = useRouter();
    const title = router?.query?.id;
    const { block } = useSelector((state: IRootState) => state.blocks);
    const { block_height } = block || {};
    
    return (
        <>
            <Topper 
                backlink={"/blocks"} 
                customTitle={title} 
                additiveTitle={` #${block_height}`}
            />
            <StatsSingleBlock />
            <Grid>
                <GridWrapper>
                    test
                </GridWrapper>
            </Grid>
        </>
    );
};


export default BlocksSinglePage;
