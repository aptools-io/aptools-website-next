// React
import React from "react";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// ECharts
import ReactECharts from "echarts-for-react";

// Styles
import classNames from "classnames";
import { Plug } from "src/components/ui";
import styles from "./DailyActiveWallets.module.scss";

// Other
import chartOptions from "./data/chartOptions";

const DailyActiveWallets: React.FC<IComponent> = ({ className }) => {
    const { data: generalData } = useSelector(
        (state: IRootState) => state.statsGeneral
    );

    const { transactions_plot, addresses_plot } = generalData || {};
    console.log(transactions_plot, addresses_plot);

    const dailyTransactions = transactions_plot || {};
    const dailyAddresses = addresses_plot || {};

    const classes = classNames([styles["daily-active-wallets"], className]);

    const data = [
        {
            name: "Daily Active Transactions",
            chart: dailyTransactions
        },
        {
            name: "Daily Active Addresses",
            chart: dailyAddresses
        }
    ];

    return (
        <div className={classes}>
            <strong className={"chart__title"}>Daily Active Wallets</strong>
            <div className={"chart__inner"}>
                {!(!dailyTransactions || !dailyAddresses) ? (
                    <ReactECharts
                        className={"chart__wrapper"}
                        theme={""}
                        option={chartOptions(data)}
                    />
                ) : (
                    <Plug noData />
                )}
            </div>
        </div>
    );
};

export default DailyActiveWallets;
