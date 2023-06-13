// React
import React from "react";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// Styles
import classNames from "classnames";
import { List, ListHeader } from "src/components/ui";
import styles from "./DexVolumeList.module.scss";

// Components

// Other
import media from "./data/adaptive";
import useWindowSize from "src/scripts/hooks/useWindowSize";
// Options
/* import { columnNames, columns } from "./data/listOptionsDesktop"; */

const DexVolume: React.FC<IComponent> = ({
    className 
}) => {
    const { data: dexesVolumesData } = useSelector((state: IRootState) => state.statsDexesVolumes);
    const { width } = useWindowSize();
    const { columnNames = null, columns = null } = media(width) || {};

    const classes = classNames([
        styles["dex-volume"],
        "list",
        className
    ]);

    if(!dexesVolumesData || !columnNames || !columns || !width) return <></>;

    return (
        <div className={classes}>
            <strong className={"list__title"}>
                <span>DEX Volume</span>
            </strong>
            <ListHeader 
                columnNames={columnNames} 
                columns={columns} 
                data={dexesVolumesData}
            >
                <List />
            </ListHeader>
        </div>
    );
};

export default DexVolume;
