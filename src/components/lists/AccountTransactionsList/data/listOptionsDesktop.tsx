import { formatNumber, noExponents, setSign } from "src/scripts/util/numbers";

// Styles
import classNames from "classnames";
import { concatString, shortenHashString } from "src/scripts/util/strings";
import { timeAgo } from "src/scripts/util/timeConvert";
import { getTransactionType } from "src/scripts/util/transactions";
import { Tooltip } from "src/components/ui";
import styles from "../AccountTransactionsList.module.scss";

// Convert
const columnNamesDesktop = [
    {
        key: "version",
        value: "Version",
        cantSort: true,
        headHideMobile: true,
        ownLink: "/transactions",
        underline: true
    },
    {
        key: "block",
        value: "Block",
        cantSort: true,
        headHideMobile: true,
        ownLink: "/blocks",
        underline: true
    },
    {
        key: "type",
        value: "Type",
        formatterComponent: (v) => {
            return <span className={classNames([styles["account-transactions-list__type"], { [styles.success]: v === "Deposit" }, { [styles.error]: v === "Withdraw" }])}>{v}</span>;
        },

        cantSort: true,
        headHideMobile: true
    },
    {
        key: "coin_name",
        value: "Coin",
        symbol: "coin_symbol",
        description: "coin_symbol",
        cantSort: true,
        headHideMobile: true
    },
    {
        key: "hash",
        value: "Hash",
        formatter: (v) => `${shortenHashString(v)}`,
        ownLink: "/transactions",
        underline: true,
        cantSort: true,
        headHideMobile: true
    },
    {
        key: "account",
        value: "Account",
        formatter: (v) => `${shortenHashString(v)}`,
        underline: true,
        ownLink: "/accounts",
        cantSort: true,
        headHideMobile: true
    },
    {
        key: "value",
        value: "Value",
        description: "value_usd",
        formatter: (v, row) => `${concatString(formatNumber(v, 2), "", ` ${row?.coin_symbol}`)}`,
        descriptionFormatter: (v) => `${concatString(formatNumber(v, 2), "", " $")}`,
        cantSort: true,
        headHideMobile: true
    },
    {
        key: "fee",
        value: "Txn fee",
        formatter: (v) => {
            if (v.toString().indexOf("e") !== -1) return `${concatString(formatNumber(0.00001, 4, true), "", " APT")}`;
            return `${concatString(formatNumber(v, 4), "", " APT")}`;
        },
        cantSort: true,
        headHideMobile: true
    },
    {
        key: "profit_usd",
        value: "Profit",
        cantSort: true,
        formatter: (v) => `${concatString(formatNumber(v, 2), "", "$")}`,
        headHideMobile: true
    },
    {
        key: "timestamp",
        value: "Timestamp",
        formatter: (v) => <Tooltip text={timeAgo(v / 1000)}>{timeAgo(v / 1000, true)}</Tooltip>,
        cantSort: true,
        headHideMobile: true
    }
];

// Columns
const columnsDesktop = ["7.25%", "7.25%", "7%", "10%", "14%", "14%", "10%", "10%", "10%", "10%"];

export { columnNamesDesktop, columnsDesktop };
