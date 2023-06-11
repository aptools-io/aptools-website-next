// React
import React from "react";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// Styles
import classNames from "classnames";
import styles from "./MarketsList.module.scss";

// Components
import { List, ListHeader, Tabs } from "src/components/ui";

// Options
import { columnNames, columns } from "./data/listOptions";

const MarketsList: React.FC<IComponent> = ({
    className 
}) => {
    const { data: generalData } = useSelector((state: IRootState) => state.statsGeneral);
    const { markets = [] } = generalData || {};

    const classes = classNames([
        styles["market"],
        "list",
        className
    ]);
    
    if(!markets) return <></>;

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
