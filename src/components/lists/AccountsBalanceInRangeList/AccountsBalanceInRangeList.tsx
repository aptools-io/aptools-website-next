// React
import React from "react";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// Styles
import classNames from "classnames";
import { List, ListHeader, Plug } from "src/components/ui";
import styles from "./AccountsBalanceInRangeList.module.scss";

// Components

// Options
import { columnNames, columns } from "./data/listOptions";

const AccountsBalanceInRangeList: React.FC<IListWrapperProps> = ({ keyValue, className }) => {
    const { data: generalData } = useSelector((state: IRootState) => state.statsGeneral);
    const { balance_range_distribution = [] } = generalData || {};
    //const { top_apt_receivers } = top_statistics?.[keyValue] as IApiTopStatisticsBy || {};

    const classes = classNames([styles["accounts-balance-in-range"], "list", className]);

    return (
        <div className={classes}>
            <strong className={"list__title"}>
                <span>Accounts With Balance In A Range</span>
            </strong>
            {true ? (
                <ListHeader columnNames={columnNames} columns={columns} data={balance_range_distribution}>
                    <List />
                </ListHeader>
            ) : (
                <Plug noData />
            )}
        </div>
    );
};

export default AccountsBalanceInRangeList;
