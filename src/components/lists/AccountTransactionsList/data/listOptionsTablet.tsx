import { formatNumber, noExponents, setSign } from "src/scripts/util/numbers";

// Styles
import classNames from "classnames";
import { concatString, shortenHashString } from "src/scripts/util/strings";
import { timeAgo } from "src/scripts/util/timeConvert";
import { getTransactionType } from "src/scripts/util/transactions";
import { ActiveLink, CopyText, Tooltip } from "src/components/ui";
import styles from "../AccountTransactionsList.module.scss";

// Convert
const columnNamesTablet = [
    {
        key: "_id",
        value: "##",
        hideMobile: true,
        headRemove: true
    },
    {
        key: "block",
        value: "Block",
        valueGridReplace: [
            {
                key: "block",
                description: "timestamp",
                ownLink: "/blocks",
                underline: true,
                ownLinkValueFormatter: (v, row) => {
                    return row?.block;
                },
                descriptionFormatter: (v) => (
                    <Tooltip left text={timeAgo(v / 1000)}>
                        {timeAgo(v / 1000, true)}
                    </Tooltip>
                )
            },
            {
                key: "type",
                formatterComponent: (v) => {
                    return <span className={classNames([styles["account-transactions-list__type"], { [styles.success]: v === "Deposit" }, { [styles.error]: v === "Withdraw" }])}>{v}</span>;
                }
            },
            {
                key: "coin_symbol",
                symbol: "coin_symbol"
            },
            {
                key: "value",
                description: "value_usd",
                formatter: (v, row) => `${concatString(formatNumber(v, 2), "", ` ${row?.coin_symbol}`)}`,
                descriptionFormatter: (v) => `${concatString(formatNumber(v, 2), "", " $")}`
            },
            {
                key: "profit_usd",
                formatter: (v) => `${concatString(formatNumber(v, 2), "", "$")}`
            },
            {
                collapser: true,
                right: true
            }
        ],
        mainMobile: true
    },
    {
        value: "Type",
        hideMobile: true
    },
    {
        value: "Coin",
        hideMobile: true
    },
    {
        value: "Value",
        hideMobile: true
    },
    {
        value: "Profit",
        hideMobile: true
    },
    {
        value: "",
        hideMobile: true
    },
    {
        value: "",
        key: "fee",
        headRemove: true,
        formatterComponent: (v, row) => {
            const feeFormatter = (v) => {
                if (v.toString().indexOf("e") !== -1) return `${concatString(formatNumber(0.00001, 4, true), "", " APT")}`;
                return `${concatString(formatNumber(v, 4), "", " APT")}`;
            };
            return (
                <span className={styles["account-transactions-list__tablet-inner"]}>
                    <span className={styles["account-transactions-list__tablet-item"]}>
                        <span className={styles["title"]}>Txn fee</span>
                        <span className={styles["value"]}>{feeFormatter(row?.fee)}</span>
                    </span>
                    <span className={styles["account-transactions-list__tablet-item"]}>
                        <span className={styles["title"]}>Version</span>
                        <span className={styles["value"]}>{row?.version}</span>
                    </span>
                </span>
            );
        },
        collapsed: true
    },
    {
        value: "",
        key: "fee",
        headRemove: true,
        formatterComponent: (v, row) => {
            return (
                <span className={styles["account-transactions-list__tablet-inner"]}>
                    <span className={styles["account-transactions-list__tablet-item"]}>
                        <span className={styles["title"]}>Hash</span>
                        <span className={styles["value"]}>
                            <CopyText text={row?.hash} />
                            <ActiveLink href={`/transactions/${row?.hash}`}>
                                <a>{shortenHashString(row?.hash)}</a>
                            </ActiveLink>
                        </span>
                    </span>
                    <span className={styles["account-transactions-list__tablet-item"]}>
                        <span className={styles["title"]}>Account</span>
                        <span className={styles["value"]}>
                            <CopyText text={row?.account} />
                            <ActiveLink href={`/accounts/${row?.account}`}>
                                <a>{shortenHashString(row?.account)}</a>
                            </ActiveLink>
                        </span>
                    </span>
                </span>
            );
        },
        collapsed: true
    }
];

// Columns
const columnsTablet = ["15%", "15%", "19.5%", "30.5%", "15%", "5%"];

export { columnNamesTablet, columnsTablet };
