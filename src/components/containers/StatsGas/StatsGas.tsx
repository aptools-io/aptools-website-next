// React
import React from "react";

// Styles
import classNames from "classnames";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";
import { formatNumber } from "src/scripts/util/numbers";
import { Plug } from "src/components/ui";
import styles from "./StatsGas.module.scss";


const StatsGas: React.FC<IComponent> = ({
    className 
}) => {
    const { data: generalData } = useSelector((state: IRootState) => state.statsGeneral);

    const { blockchain_info } = generalData || {};
    const { 
        gas_price = 0, 
        gas_unit_price_24h = 0, 
        gas_unit_price_peak = 0, 
        mint_1000_nfts = 0, 
        mint_1000_nfts_usd = 0 
    } = blockchain_info || {};

    const classes = classNames([
        styles["stats-gas"],
        className
    ]);

    return (
        <>
            <div className={"stats__top"}>
                <div className={"stats__top-wrapper"}>
                    <strong className={"stats__top-title"}>Gas price</strong>
                </div>
                <div className={"stats__top-stats"}>
                    <span className={"title"}>{gas_price} USD</span>
                </div>
            </div>
            
            {blockchain_info ? <div className={classes}>
                <div className={"stats__item"}>
                    <div className={"stats__item-wrapper"}>
                        <span className={"title"}>Gas unit price <span>24h / peak</span></span>
                        <span className={"info"}>{formatNumber(gas_unit_price_24h)} / <span>{formatNumber(gas_unit_price_peak)}</span></span>
                    </div>
                    <div className={"stats__item-wrapper"}>
                        <span className={"title"}>Mint 1000 NFTs price</span>
                        <span className={"info"}>{formatNumber(mint_1000_nfts)} APT<span className={"min"}>${formatNumber(mint_1000_nfts_usd)}</span></span>
                    </div>
                </div>
                <div className={"stats__item"}>
                </div>
            </div> : <Plug noData />}
            <div />
        </>
    );
};

export default StatsGas;
