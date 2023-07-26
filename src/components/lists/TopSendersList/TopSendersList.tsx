// React
import React from "react";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// Styles
import classNames from "classnames";
import { List, ListHeader, Plug } from "src/components/ui";
import styles from "./TopSendersList.module.scss";

// Components

// Options
import { columnNames, columns } from "./data/listOptions";

const TopSendersList: React.FC<IListWrapperProps> = ({
    keyValue,
    className 
}) => {
    const { data: generalData } = useSelector((state: IRootState) => state.statsGeneral);
    const { top_statistics } = generalData || {};
    const { top_apt_senders } = top_statistics?.[keyValue] as IApiTopStatisticsBy || {};

    const classes = classNames([
        styles["top-senders"],
        "list",
        className
    ]);

    return (
        <div className={classes}>
            <strong className={"list__title"}>
                <span>Top Senders</span>
            </strong>
            {!(!top_statistics || !top_apt_senders) ? <ListHeader 
                columnNames={columnNames} 
                columns={columns} 
                data={top_apt_senders}
            >
                <List />
            </ListHeader> : <Plug noData />}
        </div>
    );
};

export default TopSendersList;
