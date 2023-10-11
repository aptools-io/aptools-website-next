import { formatNumber } from "src/scripts/util/numbers";
import { DexListTransaction, DexListUser } from "src/components/svg";
import styles from "../TopDexesList.module.scss";

// Convert
const columnNamesMobile = [
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
        headHideMobile: true,
        formatter: (v) => `${formatNumber(v)}`
    },
    {
        key: "week",
        value: "7 days",
        headHideMobile: true,
        formatter: (v) => `${formatNumber(v)}`
    },
    {
        key: "all_time",
        value: "All time",
        defaultSort: true,
        formatter: (v) => `${formatNumber(v)}`,
        hideMobile: true
    }
];

// Columns
const columnsMobile = ["25%", "25%", "25%", "25%"];

export { columnNamesMobile, columnsMobile };
