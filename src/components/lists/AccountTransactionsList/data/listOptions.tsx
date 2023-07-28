
import { formatNumber, setSign } from "src/scripts/util/numbers";

// Styles
import classNames from "classnames";
import { concatString, shortenHashString } from "src/scripts/util/strings";
import { timeAgo } from "src/scripts/util/timeConvert";
import { getTransactionType } from "src/scripts/util/transactions";
import styles from "../AccountTransactionsList.module.scss";

// Convert
const columnNames = [
    {
        "key": "version",
        "value": "Version",
        "cantSort": true,
        "headHideMobile": true
    },
    {
        "key": "block",
        "value": "Block",
        "cantSort": true,
        "headHideMobile": true
    },
    {
        "key": "type",
        "value": "Type",
        "formatterComponent": (v) => {
            return (
                <span className={classNames([
                    styles["account-transactions-list__type"],
                    { [styles["success"]]: v === "Deposit" },
                    { [styles["error"]]: v === "Withdraw" },
                ])}>{v}</span>
            );
        },
        
        "cantSort": true,
        "headHideMobile": true
    },
    {
        "key": "coin_name",
        "value": "Coin",
        "symbol": "coin_symbol",
        "description": "coin_symbol",
        "cantSort": true,
        "headHideMobile": true
    },
    {
        "key": "hash",
        "value": "Hash",
        "formatter": (v) => `${shortenHashString(v)}`,
        "ownLink": "/transactions",
        "underline": true,
        "cantSort": true,
        "headHideMobile": true
    },
    {
        "key": "account",
        "value": "Account",
        "formatter": (v) => `${shortenHashString(v)}`,
        "underline": true,
        "ownLink": "/accounts",
        "cantSort": true,
        "headHideMobile": true
    },
    {
        "key": "value",
        "value": "Value",
        "description": "value_usd",
        "formatter": (v) => `${concatString(formatNumber(v, 2), "", "$") }`,
        "descriptionFormatter": (v) => `${concatString(formatNumber(v, 2), "", "$") }`,
        "cantSort": true,
        "headHideMobile": true
    },
    {
        "key": "fee",
        "value": "Txn fee",
        "formatter": (v) => {
            return `${concatString(formatNumber(v, 4), "", " APT")}`;
        },
        "cantSort": true,
        "headHideMobile": true
    },
    {
        "key": "profit_usd",
        "value": "Profit",
        "cantSort": true,
        "formatter": (v) => `${concatString(formatNumber(v, 2), "", "$") }`,
        "headHideMobile": true
    },
    {
        "key": "timestamp",
        "value": "Timestamp",
        "formatter": (v) => `${timeAgo(v)}`,
        "cantSort": true,
        "headHideMobile": true
    }
];

// Columns
const columns = ["7.25%", "7.25%", "5%", "10%", "15%", "15%", "10%", "10%", "10%", "10%"];

export { columnNames, columns };