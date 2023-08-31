// React
import React from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// Components
import { AccountsList } from "src/components/lists";
import { Tabs } from "src/components/ui";

// Hooks
import useWindowSize from "src/scripts/hooks/useWindowSize";

// Styles
import classNames from "classnames";
import styles from "./Nft.module.scss";

// Data
import categories from "./data/categories";

const Nft: React.FC<IComponent> = ({ className }) => {
    const dispatch = useDispatch();

    const classes = classNames([styles.nft__tabs, className]);

    return (
        <div className={classes}>
            <Tabs
                windowLoad
                tabsName={"nftTabs"}
                dataArray={categories(dispatch)}
                itemsCount={false}>
                <></>
            </Tabs>
        </div>
    );
};

export default Nft;
