// React
import React, { useState } from "react";

// Styles
import styles from "./TokenStatistics.module.scss";
import classNames from "classnames";

// Components
import { TitleSwitcher } from "src/components/ui";

// Other
import { switcherOptions } from "./data/switcherOptions";
import { TopTotalHoldersList, TopWalletReceiversList, TopWalletSendersList } from "src/components/lists";
import { Grid, GridWrapper } from "src/components/general";

const TokenStatistics: React.FC<IComponent> = ({
    className 
}) => {
    const [value, setValue] = useState(switcherOptions[0]);

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
            />
            <Grid columns={3}>
                <GridWrapper gridWidth={1}>
                    <TopWalletSendersList key={value.key} keyValue={value.key} />
                </GridWrapper>
                <GridWrapper  gridWidth={1}>
                    <TopWalletReceiversList key={value.key} keyValue={value.key} />
                </GridWrapper>
                <GridWrapper  gridWidth={1}>
                    <TopTotalHoldersList key={value.key} keyValue={value.key} />
                </GridWrapper>
            </Grid>
            
        </div>
    );
};

export default TokenStatistics;
