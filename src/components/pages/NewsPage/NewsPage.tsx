// React
import React from "react";

// Components
import { News, NewsBanner, TrendsList } from "src/components/containers";
import { Grid, GridWrapper, Topper } from "src/components/general";
import { CategoryTitle } from "src/components/ui";

const NewsPage: React.FC = () => {

    return (
        <>
            <Topper backlink={"/"} />
            <Grid>
                <GridWrapper>
                    <NewsBanner />
                    <CategoryTitle title={"In trends"} />
                    <TrendsList />
                    <CategoryTitle title={"Last News"} />
                    <News />
                </GridWrapper>
            </Grid> 
        </>
    );
};


export default NewsPage;
