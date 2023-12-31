import { formatNumber, setSign } from "src/scripts/util/numbers";

// Styles
import classNames from "classnames";
import { concatString } from "src/scripts/util/strings";
import styles from "../AccountTokenPerformance.module.scss";

// Convert
const columnNamesDesktop = [
    {
        key: "_id",
        value: "##",
        hideMobile: true,
        cantSort: true,
        headHideMobile: true
    },
    {
        key: "coin_name",
        value: "Coin",
        symbol: "coin",
        description: "coin",
        headHideMobile: true
    },
    {
        key: "remainder",
        value: "Balance",
        description: "coin",
        formatter: (v) => `${formatNumber(v, 4)}`,
        headHideMobile: true
    },
    {
        key: "remainder_usd",
        value: "Value, USD",
        formatter: (v) => `${concatString(formatNumber(v, 2), "", "$")}`,
        descriptionFormatter: () => <span></span>,
        headHideMobile: true,
        approxKey: "approximately"
    },
    {
        key: "all_time_sold",
        value: "Sold (all time)",
        description: "coin",
        formatter: (v) => `${formatNumber(v, 4)}`,
        headHideMobile: true
    },
    {
        key: "all_time_sold_usd",
        value: "Sold (all time), USD",
        formatter: (v) => `${concatString(formatNumber(v, 2), "", "$")}`,
        descriptionFormatter: () => <span></span>,
        headHideMobile: true,
        approxKey: "approximately"
    },
    {
        key: "all_time_bought",
        value: "Bought (all time)",
        description: "coin",
        formatter: (v) => `${formatNumber(v, 4)}`,
        headHideMobile: true
    },
    {
        key: "all_time_bought_usd",
        value: "Bought (all time), USD",
        formatter: (v) => `${concatString(formatNumber(v, 2), "", "$")}`,
        descriptionFormatter: () => <span></span>,
        headHideMobile: true,
        approxKey: "approximately"
    },
    {
        key: "profit_usd",
        value: "Profit (all time), USD",
        formatter: (v) => `${formatNumber(v)}`,
        descriptionFormatter: () => <span></span>,
        headHideMobile: true,
        approxKey: "approximately"
    },
    {
        key: "profit_percentage",
        value: "Profit (all time), %",
        formatter: (v) => `${concatString(formatNumber(v, 5), "", "%")}`,
        descriptionFormatter: () => <span></span>,
        colorize: true,
        headHideMobile: true
    }
];

// Columns
const columnsDesktop = [
    "3%",
    "10.77%",
    "10.77%",
    "10.77%",
    "10.77%",
    "10.77%",
    "10.77%",
    "10.77%",
    "10.77%",
    "10.77%"
];

export { columnNamesDesktop, columnsDesktop };
