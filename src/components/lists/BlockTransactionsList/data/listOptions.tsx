
import { formatNumber, noExponents, setSign } from "src/scripts/util/numbers";

// Styles
import classNames from "classnames";
import { concatString, shortenHashString } from "src/scripts/util/strings";
import { timeAgo, timeFull } from "src/scripts/util/timeConvert";
import { getTransactionType } from "src/scripts/util/transactions";
import { getGasFeeValue, getTransactionAmount, getTransactionCounterparty, getTransactionFunction } from "src/scripts/util/transaction";
import styles from "../BlockTransactionsList.module.scss";

// Convert
const columnNames = [
    {
        "key": "version",
        "value": "Version",
        "headHideMobile": true,
        "defaultSort": true,
        "link": "/transactions",
        "description": "timestamp",
        "descriptionFormatter": (v) => `${timeFull(v / 1000)}`
    },
    {
        "key": "type",
        "value": "Type",
        "formatterComponent": (v) => {
            const type = getTransactionType(v);
            return (
                <span className={classNames([
                    styles["block-transactions-list__type"],
                    styles[type.color]
                ])}>{type.name}</span>
            );
        }
    },
    {
        "key": "sender",
        "value": "Sender address",
        "formatter": (v, row) => {
            const transactionSender = (row?.sender || row?.proposer) || "-";
            return shortenHashString(transactionSender);
        },
        "ownLink": "/accounts",
        "ownLinkValueFormatter": (v, row) => {
            const transactionSender = (row?.sender || row?.proposer) || null;
            return transactionSender;
        },
        "sortByFormatter": true
    },
    {
        "key": "proposer",
        "value": "Sent to",
        "formatter": (v, row) => {
            const counterparty = getTransactionCounterparty(row);
            const { address } = counterparty || {};
            return shortenHashString(address);
        },
        "ownLink": "/accounts",
        "ownLinkValueFormatter": (v, row) => {
            const counterparty = getTransactionCounterparty(row);
            const { address } = counterparty || {};
            return address || null;
        },
        "sortByFormatter": true
    },
    {
        "key": "sender",
        "value": "Function",
        "formatter": (v, row) => {
            let func = getTransactionFunction(row) || "-";
            if(func.length > 21) func = `${func.slice(0, 21)}...`;
            return func;
        },
        "sortByFormatter": true
    },
    {
        "key": "sender",
        "value": "Amount",
        "formatter": (v, row) => {
            const amount = getTransactionAmount(row) || "-";
            return concatString(formatNumber(amount), "", " APT");
        },
        "sortByFormatter": true,
        "description": "timestamp",
        "descriptionFormatter": (v, row) => `gas ${concatString(getGasFeeValue(row?.gas_used || 0, row?.gas_unit_price || 0), "", " APT")}`
    },
];

// Columns
const columns = ["12.5%", "12.5%", "20%", "20%", "20%", "15%"];

export { columnNames, columns };