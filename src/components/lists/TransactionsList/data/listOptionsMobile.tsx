// Utils
import { formatNumber } from "src/scripts/util/numbers";
import { concatString, shortenHashString } from "src/scripts/util/strings";
import { time } from "src/scripts/util/timeConvert";
import { getTransactionType } from "src/scripts/util/transactions";

// Styles
import classNames from "classnames";
import styles from "../TransactionsList.module.scss";

// Convert
const columnNamesMobile = [
    {
        key: "timestamp",
        headRemove: true,
        fontSize: 10,
        valueGridReplace: [
            {
                key: "type",
                formatterComponent: (v) => {
                    const type = getTransactionType(v);
                    return <span className={classNames([styles.transaction__type, styles[type.color]])}></span>;
                },
                fontSize: 10
            },
            {
                key: "hash",
                formatter: (v) => `${shortenHashString(v)}`,
                ownLink: "/transactions",
                ownLinkValueFormatter: (v, row) => {
                    return row?.hash;
                },
                fontSize: 10
            },
            {
                key: "success",
                formatterComponent: (v) => {
                    return <span className={classNames([styles.transaction__success, { [styles.error]: !v }])}>{v ? "Success" : "Cancel"}</span>;
                },
                fontSize: 10
            },
            {
                key: "amount",
                formatter: (v) => `${concatString(formatNumber(v), "", " APT")}`,
                right: true,
                fontSize: 10
            }
        ]
    },
    {
        key: "version",
        headRemove: true,
        value: "Version",
        defaultSort: true,

        valueGridReplace: [
            {
                key: "timestamp",
                formatter: (v) => `${time(v)}`,
                fontSize: 10
            },
            {
                key: "version",
                formatter: (v) => `${concatString(v, "Version ", "")}`,
                fontSize: 10
            },
            {
                elementRemove: true
            },
            {
                key: "gas_used",
                formatter: (v) => `${concatString(v, "Gas ", " APT")}`,
                fontSize: 10,
                right: true,
                span: 2
            }
        ]
    }
];
// Columns
const columnsMobile = ["15%", "45%", "20%", "20%"];

export { columnNamesMobile, columnsMobile };
