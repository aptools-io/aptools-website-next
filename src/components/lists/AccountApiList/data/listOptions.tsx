/* eslint-disable */
// Styles
import classNames from "classnames";
import { Checkbox, CopyText, Select } from "src/components/ui";
import { Trash } from "src/components/svg";
import styles from "../AccountApiList.module.scss";

// Convert
const columnNames = (onChangeStatus, onChangeIpValidation, onDelete) => [
    {
        key: "key",
        value: "Key",
        formatterComponent: (v, row) => {
            console.log(row);
            return (
                <span className={styles["account-api__key"]}>
                    {v}
                    <CopyText text={v} />
                    {row._id === 1 ? <span className={styles["account-api__new"]}>New</span> : ""}
                </span>
            );
        }
    },
    {
        key: "active",
        value: "Status",
        center: true,
        formatterComponent: (v, row) => {
            return (
                <span className={classNames([styles["account-api__type"], { [styles["active"]]: v }])}>
                    {`${v === false ? "Deactive" : "Active"}`}
                    <Checkbox switcher id={`stauts-${row?._id}`} label={" "} checked={v} onChange={() => onChangeStatus(row?.id, row)} value=' ' />
                </span>
            );
        }
    },
    {
        key: "validateIp",
        value: "Validation by IP",
        center: true,
        formatterComponent: (v, row) => {
            return (
                <span className={classNames([styles["account-api__type"], { [styles["active"]]: v }])}>
                    {`${v === false ? "Deactive" : "Active"}`}
                    <Checkbox switcher label={" "} checked={v} id={`validateIp-${row?._id}`} onChange={() => onChangeIpValidation(row?.id, row)} value=' ' />
                </span>
            );
        }
    },
    {
        key: "allowedIps",
        value: "List of IP addresses",
        formatterComponent: (v, row) => {
            const renderOptions = (item, index) => <span key={index}>{item}</span>;
            return (
                <span className={classNames([styles["account-api__select"]])}>
                    <Select onChange={() => null}>{v.map(renderOptions)}</Select>
                </span>
            );
        }
    },
    {
        key: "",
        value: "Action",
        center: true,
        formatter: (v, row) => (
            <span onClick={() => onDelete(row?.id)} className={classNames([styles["account-api__remove"]])}>
                <Trash />
            </span>
        )
    }
];

// Columns
const columns = ["60%", "12.5%", "12.5%", "10%", "5%"];

export { columns, columnNames };
/* eslint-enable */
