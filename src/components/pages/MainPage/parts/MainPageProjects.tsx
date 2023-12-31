// React
import React from "react";

// Adaptive
import useWindowSize from "src/scripts/hooks/useWindowSize";

// Components
import { Grid, GridWrapper } from "src/components/general";
import { CategoryTitle } from "src/components/ui";
import { Projects } from "src/components/containers";
import media from "../data/adaptive";


const MainPageProjects: React.FC = () => {
    const { width } = useWindowSize();
    const mediaData = media(width);

    return (
        <Grid>
            <GridWrapper>
                <CategoryTitle title={"PROJECTS ON THE APTOS BLOCKCHAIN"} />
                <Projects />
                <Grid>
                    {mediaData.projectsAdditiveComponents()}
                </Grid>
            </GridWrapper>
        </Grid>
    );
};

export default React.memo(MainPageProjects);
