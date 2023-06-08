// React
import React from "react";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// Styles
import classNames from "classnames";
import styles from "./DexVolumeList.module.scss";

// Components
import { List, ListHeader } from "src/components/ui";

// Options
import { columnNames, columns } from "./data/listOptions";

const DexVolume: React.FC<IComponent> = ({
    className 
}) => {
    const { data: dexesVolumesData } = useSelector((state: IRootState) => state.statsDexesVolumes);
    const classes = classNames([
        styles["dex-volume"],
        "list",
        className
    ]);

    if(!dexesVolumesData) return <></>;

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
