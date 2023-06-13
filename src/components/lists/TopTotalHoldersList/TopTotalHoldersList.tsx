// React
import React from "react";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// Styles
import classNames from "classnames";
import { List, ListHeader } from "src/components/ui";
import styles from "./TopTotalHoldersList.module.scss";

// Components

// Options
import { columnNames, columns } from "./data/listOptions";

const TopTotalHoldersList: React.FC<IListWrapperProps> = ({
    keyValue,
    className 
}) => {
    const { data: generalData } = useSelector((state: IRootState) => state.statsGeneral);
    const { token_statistics } = generalData || {};
    const { tokens_by_total } = token_statistics?.[keyValue] || {};

    const classes = classNames([
        styles["top-total-holders"],
        "list",
        className
    ]);

    if(!token_statistics || !tokens_by_total) return <></>;

    return (
        <div className={classes}>
            <strong className={"list__title"}>
                <span>Top Tokens by Total Holders</span>
            </strong>
            <ListHeader 
                columnNames={columnNames} 
                columns={columns} 
                data={tokens_by_total}
            >
                <List />
            </ListHeader>
        </div>
    );
};

export default TopTotalHoldersList;
