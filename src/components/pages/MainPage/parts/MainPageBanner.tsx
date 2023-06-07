// React
import useTranslation from "next-translate/useTranslation";
import React from "react";

// Components
import { Grid, GridWrapper } from "src/components/general";
import { MainBanner } from "src/components/containers";

const MainPageBanner: React.FC = () => {
    const { t } = useTranslation("common");
    return (
        <Grid>
            <GridWrapper>
                <MainBanner 
                    title={t("main banner title")}
                    description={t("main banner description")}
                />
            </GridWrapper>
        </Grid>
    );
};

export default MainPageBanner;
