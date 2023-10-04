// React
import React from "react";

// Styles
import classNames from "classnames";
import { List, ListHeader } from "src/components/ui";
import { InitialSupplyStats } from "src/components/charts";
import styles from "./InitalSupplyList.module.scss";

// Components

// Options
import { columnNames, columns } from "./data/listOptions";

const InitalSupplyList: React.FC<IComponent> = ({ className }) => {
    /* HARDCODE */
    const classes = classNames([styles["inital-supply"], "list", className]);

    const data = [
        {
            category: "Community",
            percent: 51.02,
            inital: 510217359.767,
            color: "#F1CE73"
        },
        {
            category: "Core Contributors",
            percent: 19,
            inital: 190000000.0,
            color: "#ECA584"
        },
        {
            category: "Foundation",
            percent: 16.5,
            inital: 165000000.0,
            color: "#87C4A3"
        },
        {
            category: "Investors",
            percent: 13.48,
            inital: 134782640.233,
            color: "#8D9FE9"
        }
    ];

    return (
        <div className={classes}>
            <strong className={"list__title"}>
                <span>Initial Supply</span>
            </strong>
            <InitialSupplyStats />
            <ListHeader columnNames={columnNames} columns={columns} data={data}>
                <List />
            </ListHeader>
        </div>
    );
};

export default InitalSupplyList;
