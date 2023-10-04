// React
import React, { useState } from "react";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// ECharts
import ReactECharts from "echarts-for-react";

// Components

// Styles
import classNames from "classnames";

// Other
import { Img, Plug, Skeleton } from "src/components/ui";
import { getImageFromApi } from "src/scripts/util/image";
import { formatNumber } from "src/scripts/util/numbers";
import { concatString } from "src/scripts/util/strings";
import useWindowSize from "src/scripts/hooks/useWindowSize";
import chartOptions from "./data/chartOptions";
import styles from "./AccountTokenStats.module.scss";
import media from "./data/adaptive";

const AccountTokenStats: React.FC<IComponent> = ({ className }) => {
    const { accountStats, accountsLoading: loading = false } = useSelector((state: IRootState) => state.accounts);
    const { token_stats = [] } = accountStats || {};

    const { width } = useWindowSize();
    const m = media(width) || {};
    console.log(token_stats);

    if (loading) return <Skeleton />;
    if (!accountStats || !token_stats || !token_stats?.length || !width)
        return (
            <>
                <strong className={"chart__title normal"}>
                    <span>Tokens Stats</span>
                </strong>
                <Plug noData />
            </>
        );

    const colors = ["#EF8686", "#60C6A8", "#3B5998", "#8B9DC3", "#FDD97D"];
    const data = token_stats.map((item, index) => {
        const int = Math.floor(index / colors.length);

        return {
            title: item.coin_name,
            symbol: item.coin_symbol,
            value: item.percentage,
            color: colors[index - colors.length * int]
        };
    });

    const classes = classNames([styles["account-token-stats"], "chart", className]);

    const handleTokens = () => {
        const metrics = new CustomEvent("setRemoteTab", {
            detail: {
                tabsName: "accountTabs",
                tabId: 2
            }
        });
        window.dispatchEvent(metrics);
    };

    const renderList = (item: IBar, index: number) => {
        const isOther = item.title === "Other";

        return (
            <li key={index} {...(isOther && { onClick: handleTokens })} className={classNames([styles["account-performance__list-item"], { [styles["pointer"]]: isOther }])}>
                <div className={styles.info}>
                    <div className={styles.color} style={{ backgroundColor: item.color }} />
                    {!isOther && <Img src={getImageFromApi(item.symbol)} alt={item.title} />}
                    <div className={styles.inner}>
                        <strong className={styles.title}>{item.title}</strong>
                        {!isOther && <span className={styles.description}>{item.symbol}</span>}
                    </div>
                </div>
                <span>{concatString(formatNumber(item.value, 5), "", "%")}</span>
            </li>
        );
    };

    return (
        <div className={classes}>
            <strong className={"chart__title normal"}>
                <span>Tokens Stats</span>
            </strong>
            <div className={styles["account-performance__inner"]}>
                <ReactECharts style={{ height: m, width: m }} theme={""} option={chartOptions(data)} />
                <ul className={styles["account-performance__list-items"]}>{data.map(renderList)}</ul>
            </div>
        </div>
    );
};

export default AccountTokenStats;
