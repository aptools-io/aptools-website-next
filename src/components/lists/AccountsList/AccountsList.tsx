// React
import React from "react";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// Styles
import classNames from "classnames";
import { List, ListHeader, Tabs } from "src/components/ui";
import useWindowSize from "src/scripts/hooks/useWindowSize";
import styles from "./AccountsList.module.scss";

// Components

// Other
import media from "./data/adaptive";
// Options
/* import { columnNames, columns } from "./data/listOptionsDesktop"; */

const Accounts: React.FC<IComponent> = ({
    className 
}) => {
    const { accounts } = useSelector((state: IRootState) => state.accounts);
    const { width } = useWindowSize();
    const { columnNames = null, columns = null } = media(width) || {};
    console.log(accounts)

    const classes = classNames([
        styles["accounts"],
        "list",
        className
    ]);

    if(!accounts || !columnNames || !columns || !width) return <></>;

    return (
        <div className={classes}>
            {/* <strong className={"list__title"}>
                <span>DEX Volume</span>
            </strong> */}
            <Tabs dataArray={[ { id: 1, title: "Transfers" } ]} itemsCount={false}>
                <ListHeader 
                    columnNames={columnNames} 
                    columns={columns} 
                    data={accounts}
                >
                    <List />
                </ListHeader>
            </Tabs>
        </div>
    );
};

export default Accounts;
