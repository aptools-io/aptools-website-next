// React
import React from "react";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// Styles
import classNames from "classnames";
import { List, ListHeader, Plug } from "src/components/ui";
import styles from "./TopTokensVolumeList.module.scss";

// Components

// Options
import { columnNames, columns } from "./data/listOptions";

const TopTokensVolumeList: React.FC<IComponent> = ({
    className 
}) => {
    const { data: generalData } = useSelector((state: IRootState) => state.statsGeneral);
    const { top_tokens_by_volume } = generalData || {};
    const classes = classNames([
        styles["top-tokens-volume"],
        "list",
        className
    ]);

    return (
        <div className={classes}>
            <strong className={"list__title"}>
                <span>Top Tokens by Volume</span>
            </strong>
            {top_tokens_by_volume ? <ListHeader 
                columnNames={columnNames} 
                columns={columns} 
                data={top_tokens_by_volume}
            >
                <List  />
            </ListHeader> : <Plug noData />}
        </div>
    );
};

export default TopTokensVolumeList;
