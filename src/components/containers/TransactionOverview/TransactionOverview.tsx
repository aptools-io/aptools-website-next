// React
import React from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// Components
import { AccountsList } from "src/components/lists";
import { Plate, Tabs } from "src/components/ui";

// Hooks
import useWindowSize from "src/scripts/hooks/useWindowSize";

// Styles
import classNames from "classnames";

// Data
import { Grid, GridWrapper } from "src/components/general";
import { getGasFeeValue, getTransactionAmount } from "src/scripts/util/transaction";
import { formatNumber } from "src/scripts/util/numbers";
import styles from "./TransactionOverview.module.scss";




const TransactionOverview: React.FC<IComponent> = ({
    className 
}) => {
    /* const dispatch = useDispatch(); */
    const { transaction } = useSelector((state: IRootState) => state.statsTransactions);
    const { 
        version, 
        success, 

        vm_status, 
        timestamp, 
        expiration_timestamp_secs,
        
        sender,
        payload,
        
        gas_used,
        gas_unit_price,
        max_gas_amount
    } = transaction || {};

    const {
        function: func
    } = payload || {};

    const classes = classNames([
        styles["transaction-overview"],
        className
    ]);


    return (
        <Grid>
            <GridWrapper gridWidth={2}>
                <Grid>
                    <GridWrapper>
                        <Plate compressed min noMin>
                            <div className={"stats__item"}>
                                <div className={"stats__item-wrapper"}>
                                    <span className={"title"}>Version</span>
                                    <span className={"info"}>{version}</span>
                                </div>
                                <div className={"stats__item-wrapper"}>
                                    <span className={"title"}>Status</span>
                                    <span className={"info"}>{success ? "Success" : "Cancel"}</span>
                                </div>
                            </div>
                        </Plate>
                    </GridWrapper>
                    <GridWrapper>
                        <Plate compressed min noMin>
                            <div className={"stats__item"}>
                                <div className={"stats__item-wrapper"}>
                                    <span className={"title"}>Sequence Number</span>
                                    <span className={"info"}>{version}</span>
                                </div>
                                <div className={"stats__item-wrapper"}>
                                    <span className={"title"}>VM status</span>
                                    <span className={"info"}>{vm_status}</span>
                                </div>
                                <div className={"stats__item-wrapper"}>
                                    <span className={"title"}>Timestamp</span>
                                    <span className={"info"}>{timestamp}</span>
                                </div>
                                <div className={"stats__item-wrapper"}>
                                    <span className={"title"}>Expiration Timestamp</span>
                                    <span className={"info"}>{expiration_timestamp_secs}</span>
                                </div>
                            </div>
                        </Plate>
                    </GridWrapper>
                    <GridWrapper>
                        <Plate compressed min noMin>
                            <div className={"stats__item"}>
                                <div className={"stats__item-wrapper"}>
                                    <span className={"title"}>Sender</span>
                                    <span className={"info"}>{sender}</span>
                                </div>
                                <div className={"stats__item-wrapper"}>
                                    <span className={"title"}>Smart Contract</span>
                                    <span className={"info"}>{func?.slice(0, func.indexOf(":"))}</span>
                                </div>
                                <div className={"stats__item-wrapper"}>
                                    <span className={"title"}>Function</span>
                                    <span className={"info"}>{func?.slice((func.length - func.indexOf(":") - 2) * -1)}</span>
                                </div>
                            </div>
                        </Plate>
                    </GridWrapper>
                    <GridWrapper>
                        <Plate compressed min noMin>
                            <div className={"stats__item"}>
                                <div className={"stats__item-wrapper"}>
                                    <span className={"title"}>Amount</span>
                                    {/* <span className={"info"}>{Number(getTransactionAmount(transaction)) / 100000000}</span> */}
                                </div>
                                {gas_used && gas_unit_price && <div className={"stats__item-wrapper"}>
                                    <span className={"title"}>Gas Fee</span>
                                    {/* <span className={"info"}>{Number(getGasFeeValue(gas_used, gas_unit_price)) / 100000000}</span> */}
                                </div>}
                                {gas_unit_price && <div className={"stats__item-wrapper"}>
                                    <span className={"title"}>Gas Unit Price</span>
                                    {/* <span className={"info"}>{gas_unit_price  / 100000000}</span> */}
                                </div>}
                                <div className={"stats__item-wrapper"}>
                                    <span className={"title"}>Max Gas Limit</span>
                                    <span className={"info"}>{max_gas_amount}</span>
                                </div>
                            </div>
                        </Plate>
                    </GridWrapper>
                </Grid>
            </GridWrapper>
            <GridWrapper gridWidth={5}>
            <Grid>
                    <GridWrapper>
                        <Plate></Plate>
                    </GridWrapper>
                </Grid>
            </GridWrapper>
        </Grid>
    );
};

export default TransactionOverview;
