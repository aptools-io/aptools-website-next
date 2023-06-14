// React
import React from "react";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// Styles
import classNames from "classnames";
import { List, ListHeader, Tabs } from "src/components/ui";
import useWindowSize from "src/scripts/hooks/useWindowSize";
import styles from "./MarketsList.module.scss";

// Adaptive
import media from "./data/adaptive";

const MarketsList: React.FC<IComponent> = ({
    className 
}) => {
    const { data: generalData } = useSelector((state: IRootState) => state.statsGeneral);
    const { markets = [] } = generalData || {};

    const { width } = useWindowSize();
    const { columnNames = null, columns = null } = media(width) || {};

    const classes = classNames([
        styles["market"],
        "list",
        className
    ]);
    
    if(!markets || !width || !columns || !columnNames) return <></>;

    return (
        <div className={classes}>
            <strong className={"list__title"}>
                <span>Markets</span>
            </strong>
            <Tabs 
                data={Object.fromEntries(markets?.map(e => [e.dex, e.pairs]))}
                itemsCount={false}
            >
                <ListHeader 
                    columnNames={columnNames} 
                    columns={columns} 
                >
                    <List adoptMobile />
                </ListHeader>
            </Tabs>
            
        </div>
    );
};

export default MarketsList;
