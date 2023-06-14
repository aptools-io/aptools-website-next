// React
import React from "react";

// Styles
import classNames from "classnames";
import { List, ListHeader } from "src/components/ui";
import styles from "./InitalSupplyList.module.scss";

// Components

// Options
import { columnNames, columns } from "./data/listOptions";

const InitalSupplyList: React.FC<IComponent> = ({
    className 
}) => {
    /* HARDCODE */
    const classes = classNames([
        styles["inital-supply"],
        "list",
        className
    ]);

    const data = [
        {
            "category": "Community",
            "percent": 51.02,
            "inital": 510217359.767
        },
        {
            "category": "Core Contributors",
            "percent": 19,
            "inital": 190000000.000
        },
        {
            "category": "Foundation",
            "percent": 16.5,
            "inital": 165000000.000
        },
        {
            "category": "Investors",
            "percent": 13.48,
            "inital": 134782640.233
        },
    ];

    return (
        <div className={classes}>
            <strong className={"list__title"}>
                <span>Initial Supply</span>
            </strong>
            <ListHeader 
                columnNames={columnNames} 
                columns={columns} 
                data={data}
            >
                <List />
            </ListHeader>
        </div>
    );
};

export default InitalSupplyList;
