// React
import React, { useState } from "react";

// Styles
import classNames from "classnames";

// Components
import { TitleSwitcher } from "src/components/ui";
import { TopReceiversList, TopSendersList } from "src/components/lists";
import { Grid, GridWrapper } from "src/components/general";

// Other
import useWindowSize from "src/scripts/hooks/useWindowSize";
import { switcherOptions } from "./data/switcherOptions";

// Hooks
import styles from "./MoneyFlow.module.scss";

// Adaptive
import media from "./data/adaptive";

const MoneyFlow: React.FC<IComponent> = ({
    className 
}) => {
    const [value, setValue] = useState(switcherOptions[0]);
    const { width } = useWindowSize();
    const mediaData = media(width);

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
            >
                <Grid columns={mediaData.moneyFlowWrapper} gap={mediaData.moneyFlowWrapperGap}>
                    <GridWrapper gridWidth={1}>
                        <TopSendersList key={value.key} keyValue={value.key} />
                    </GridWrapper>
                    <GridWrapper gridWidth={1}>
                        <TopReceiversList key={value.key} keyValue={value.key} />
                    </GridWrapper>
                </Grid>
            </TitleSwitcher>    
        </div>
    );
};

export default MoneyFlow;
