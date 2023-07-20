
import { formatNumber, setSign } from "src/scripts/util/numbers";

// Styles
import classNames from "classnames";
import styles from "../AccountTokenPerformance.module.scss";

// Convert
const columnNames = [
    {
        "key": "_id",
        "value": "##",
        "hideMobile": true,
    },
    {
        "key": "coin_name",
        "value": "Coin",
        "symbol": "coin",
        "description": "coin"
    },
    {
        "key": "remainder",
        "value": "Balance",
        "formatter": (v) => `$${formatNumber(v)}`
    },
    {
        "key": "remainder_usd",
        "value": "Value, USD",
        "formatter": (v) => `${formatNumber(v)}`
    },
    {
        "key": "all_time_sold",
        "value": "Sold (all time)",
        "description": "coin",
        "formatter": (v) => `${formatNumber(v)}`
    },
    {
        "key": "all_time_sold_usd",
        "value": "Sold (all time), USD",
        "formatter": (v) => `${formatNumber(v)}`
    },
    {
        "key": "all_time_bought",
        "value": "Bought (all time)",
        "formatter": (v) => `${formatNumber(v)}`
    },
    {
        "key": "all_time_bought_usd",
        "value": "Bought (all time), USD",
        "formatter": (v) => `${formatNumber(v)}`
    },
    {
        "key": "profit_usd",
        "value": "Profit (all time), USD",
        "formatter": (v) => `${formatNumber(v)}`
    },
    {
        "key": "profit_percentage",
        "value": "Profit (all time), %",
        "formatter": (v) => `${formatNumber(v)}`
    }
];

// Columns
const columns = ["3%", "10.77%", "10.77%", "10.77%", "10.77%", "10.77%", "10.77%", "10.77%", "10.77%", "10.77%"];

export { columnNames, columns };