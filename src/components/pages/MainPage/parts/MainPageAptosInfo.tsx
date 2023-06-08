// React
import useTranslation from "next-translate/useTranslation";
import React from "react";


// Components
import { GridWrapper } from "src/components/general";
import { Plate } from "src/components/ui";
import { StatsGas, StatsValidator } from "src/components/containers";

const AptosInfo: React.FC<{ gridWidth?: number }> = ({gridWidth = 5}) => {
    const { t } = useTranslation("common");
    return (
        <>
            <GridWrapper gridWidth={gridWidth}>
                <Plate dark title={t("validator stats")}>
                    <StatsValidator />
                </Plate>
            </GridWrapper>
            <GridWrapper gridWidth={gridWidth}>
                <Plate dark>
                    <StatsGas />
                </Plate>
            </GridWrapper>
        </>
    );
};

export default AptosInfo;
