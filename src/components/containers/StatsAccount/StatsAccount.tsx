// React
import React from "react";

// Styles
import classNames from "classnames";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// Components
import { Grid, GridWrapper } from "src/components/general";
import { Plate } from "src/components/ui";
import styles from "./StatsAccount.module.scss";

// Utils


const StatsAccount: React.FC<IComponent> = ({
    className 
}) => {
    // const { data: generalData } = useSelector((state: IRootState) => state.statsGeneral);

    const classes = classNames([
        styles["stats-accounts"],
        className
    ]);

    return (
        <Grid columns={3}>
            <GridWrapper gridWidth={1}>
                <Plate noMin>Net Worth</Plate>
            </GridWrapper>
            <GridWrapper gridWidth={2}>
                <Plate noMin bordered>Wallet</Plate>
            </GridWrapper>

            <GridWrapper gridWidth={1}>
                <Plate noMin bordered>Current Token Balalance</Plate>
            </GridWrapper>
            <GridWrapper gridWidth={1}>
                <Plate noMin bordered>Best Token Performer</Plate>
            </GridWrapper>
            <GridWrapper gridWidth={1}>
                <Plate noMin bordered>Worst Token Performer</Plate>
            </GridWrapper>

            <GridWrapper gridWidth={1}>
                <Plate noMin bordered>Current NFT Balance</Plate>
            </GridWrapper>
            <GridWrapper gridWidth={1}>
                <Plate noMin bordered>Best NFT performer</Plate>
            </GridWrapper>
            <GridWrapper gridWidth={1}>
                <Plate noMin bordered>Worst NFT performer</Plate>
            </GridWrapper>
        </Grid>
    );
};

export default StatsAccount;
