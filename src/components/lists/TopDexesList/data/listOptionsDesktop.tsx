import { formatNumber } from "src/scripts/util/numbers";
import { DexListTransaction, DexListUser } from "src/components/svg";
import styles from "../TopDexesList.module.scss";

// Convert
const columnNamesDesktop = [
    {
        key: "contract",
        value: "Contract",
        ignoreCombined: true,
        link: "/dex",
        mainMobile: true,
        replacedKeyMobile: "all_time",
        replacedFormatter: (v) => `${formatNumber(v)}`,
        underline: true
    },
    {
        key: "24h",
        value: "1 day",
        ignoreCombined: true,
        headHideMobile: true,
        formatter: (v, object) => {
            return (
                <div className={styles["top-dexes-list__value"]}>
                    <span>
                        <DexListUser />
                        {formatNumber(object?.combined?.["24h"])}
                    </span>
                    <span>
                        <DexListTransaction />
                        {formatNumber(object?.["24h"])}
                    </span>
                </div>
            );
        }
    },
    {
        key: "week",
        value: "7 days",
        ignoreCombined: true,
        headHideMobile: true,
        formatter: (v, object) => {
            return (
                <div className={styles["top-dexes-list__value"]}>
                    <span>
                        <DexListUser />
                        {formatNumber(object?.combined?.["week"])}
                    </span>
                    <span>
                        <DexListTransaction />
                        {formatNumber(object?.["week"])}
                    </span>
                </div>
            );
        }
    },
    {
        key: "all_time",
        value: "All time",
        defaultSort: true,
        ignoreCombined: true,
        formatter: (v, object) => {
            return (
                <div className={styles["top-dexes-list__value"]}>
                    <span>
                        <DexListUser />
                        {formatNumber(object?.combined?.["all_time"])}
                    </span>
                    <span>
                        <DexListTransaction />
                        {formatNumber(object?.["all_time"])}
                    </span>
                </div>
            );
        },
        hideMobile: true
    }
];

// Columns
const columnsDesktop = ["28%", "24%", "24%", "24%"];

export { columnNamesDesktop, columnsDesktop };
