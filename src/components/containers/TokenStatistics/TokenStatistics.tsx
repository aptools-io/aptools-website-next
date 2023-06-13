// React
import React, { useState } from "react";

// Styles
import classNames from "classnames";

// Components
import { TitleSwitcher } from "src/components/ui";
import { Grid, GridWrapper } from "src/components/general";
import { TopTotalHoldersList, TopWalletReceiversList, TopWalletSendersList } from "src/components/lists";

// Other
import useWindowSize from "src/scripts/hooks/useWindowSize";
import { switcherOptions } from "./data/switcherOptions";

// Adaptive
import media from "./data/adaptive";

// Hooks
import styles from "./TokenStatistics.module.scss";

const TokenStatistics: React.FC<IComponent> = ({
    className 
}) => {
    const [value, setValue] = useState(switcherOptions[0]);
    const { width } = useWindowSize();
    const mediaData = media(width);

    const classes = classNames([
        styles["token-statistics"],
        className
    ]);

    return (
        <div className={classes}>
            <TitleSwitcher 
                title={"Token Statistics"} 
                data={switcherOptions} 
                setData={setValue} 
                settedData={value} 
            >
                <Grid columns={mediaData.tokenStatisticsWrapper} gap={mediaData.tokenStatisticsWrapperGaps}>
                    <GridWrapper gridWidth={1}>
                        <TopWalletSendersList key={value.key} keyValue={value.key} />
                    </GridWrapper>
                    <GridWrapper  gridWidth={1}>
                        <TopWalletReceiversList key={value.key} keyValue={value.key} />
                    </GridWrapper>
                    <GridWrapper  gridWidth={mediaData.tokenStatisticsLast}>
                        <TopTotalHoldersList key={value.key} keyValue={value.key} />
                    </GridWrapper>
                </Grid>
            </TitleSwitcher>
        </div>
    );
};

export default TokenStatistics;
