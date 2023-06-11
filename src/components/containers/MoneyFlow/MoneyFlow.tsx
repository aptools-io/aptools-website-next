// React
import React, { useState } from "react";

// Styles
import styles from "./MoneyFlow.module.scss";
import classNames from "classnames";

// Components
import { TitleSwitcher } from "src/components/ui";

// Other
import { switcherOptions } from "./data/switcherOptions";
import { TopReceiversList, TopSendersList, TopTotalHoldersList, TopWalletReceiversList, TopWalletSendersList } from "src/components/lists";
import { Grid, GridWrapper } from "src/components/general";

const MoneyFlow: React.FC<IComponent> = ({
    className 
}) => {
    const [value, setValue] = useState(switcherOptions[0]);

    const classes = classNames([
        styles["money-flow"],
        className
    ]);

    return (
        <div className={classes}>
            <TitleSwitcher 
                title={"Money Flow"} 
                data={switcherOptions} 
                setData={setValue} 
                settedData={value} 
            />
            <Grid columns={2}>
                <GridWrapper gridWidth={1}>
                    <TopSendersList key={value.key} keyValue={value.key} />
                </GridWrapper>
                <GridWrapper gridWidth={1}>
                    <TopReceiversList key={value.key} keyValue={value.key} />
                </GridWrapper>
            </Grid>
            
        </div>
    );
};

export default MoneyFlow;
