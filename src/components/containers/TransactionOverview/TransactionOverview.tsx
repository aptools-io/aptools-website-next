// React
import React from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// Components
import { AccountsList } from "src/components/lists";
import { ActiveLink, CodeArea, CopyText, Plate, Tabs } from "src/components/ui";

// Hooks
import useWindowSize from "src/scripts/hooks/useWindowSize";

// Styles
import classNames from "classnames";

// Data
import { Grid, GridWrapper } from "src/components/general";
import { getGasFeeValue, getTransactionAmount, getTransactionCounterparty, getTransactionFunction } from "src/scripts/util/transaction";
import { formatNumber, noExponents } from "src/scripts/util/numbers";
import { timeAgo, transactionDate } from "src/scripts/util/timeConvert";
import { concatString, shortenHashString } from "src/scripts/util/strings";
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
        
        gas_used,
        gas_unit_price,
        max_gas_amount,

        sequence_number,

        state_change_hash,
        event_root_hash,
        accumulator_root_hash,

        proposer,
        id,
        epoch,
        round,

        signature
    } = transaction || {};

    const classes = classNames([
        styles["transaction-overview"],
        className
    ]);

    if(!transaction) return <></>;

    const counterparty = getTransactionCounterparty(transaction);
    const funcName = getTransactionFunction(transaction);
    const amount = getTransactionAmount(transaction);
    const { address, role } = counterparty || {};

    return (
        <Grid>
            <GridWrapper gridWidth={3}>
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
                                    <span className={classNames([
                                        "info",
                                        { "success-type": success },
                                        { "cancel-type": !success }
                                    ])}>{success ? "Success" : "Cancel"}</span>
                                </div>
                            </div>
                        </Plate>
                    </GridWrapper>
                    <GridWrapper>
                        <Plate compressed min noMin>
                            <div className={"stats__item"}>
                                {sequence_number && <div className={"stats__item-wrapper"}>
                                    <span className={"title"}>Sequence Number</span>
                                    <span className={"info"}>{sequence_number}</span>
                                </div>}
                                <div className={"stats__item-wrapper"}>
                                    <span className={"title"}>VM status</span>
                                    <span className={classNames([
                                        "info",
                                        { "success-color": vm_status === "Executed successfully" },
                                        { "cancel-color": vm_status === "Canceled" }
                                    ])}>{vm_status}</span>
                                </div>
                                <div className={"stats__item-wrapper"}>
                                    <span className={"title"}>Timestamp</span>
                                    <span className={"info"}>{transactionDate(timestamp)}</span>
                                </div>
                                {expiration_timestamp_secs && <div className={"stats__item-wrapper"}>
                                    <span className={"title"}>Expiration Timestamp</span>
                                    <span className={"info"}>{transactionDate(expiration_timestamp_secs, true)}</span>
                                </div>}
                            </div>
                        </Plate>
                    </GridWrapper>
                    {!(!sender && !address && !funcName) && <GridWrapper>
                        <Plate compressed min noMin>
                            <div className={"stats__item"}>
                                {sender && <div className={"stats__item-wrapper"}>
                                    <span className={"title"}>Sender</span>
                                    <span className={"info row"}>
                                        <ActiveLink href={`/accounts/${address}`}><a>{shortenHashString(sender)}</a></ActiveLink>
                                        <CopyText text={sender} />
                                    </span>
                                </div>}
                                {address && <div className={"stats__item-wrapper"}>
                                    <span className={"title"}>
                                        {{
                                            receiver: "Receiver",
                                            smartContract: "Smart Contract"
                                        }[role]}</span>
                                    <span className={"info row"}>
                                        <ActiveLink href={`/accounts/${address}`}><a>{shortenHashString(address)}</a></ActiveLink>
                                        <CopyText text={address} />
                                    </span>
                                </div>}
                                {funcName && <div className={"stats__item-wrapper"}>
                                    <span className={"title"}>Function</span>
                                    <span className={"info emphasis break"}>{funcName}</span>
                                </div>}
                            </div>
                        </Plate>
                    </GridWrapper>}
                    {!(!amount && !(gas_used && gas_unit_price) && !gas_unit_price && !max_gas_amount) && <GridWrapper>
                        <Plate compressed min noMin>
                            <div className={"stats__item"}>
                                {amount !== null && <div className={"stats__item-wrapper"}>
                                    <span className={"title"}>Amount</span>
                                    <span className={"info"}>{concatString(noExponents(amount), "", " APT")}</span>
                                </div>}
                                {(gas_used && gas_unit_price) && <div className={"stats__item-wrapper flex-start"}>
                                    <span className={"title"}>Gas Fee</span>
                                    <span className={"info column"}>
                                        {concatString(getGasFeeValue(gas_used, gas_unit_price), "", " APT")}
                                        <span className="little min">{concatString(formatNumber(gas_used), "", " Gas Units")}</span>
                                    </span>
                                </div>}
                                {gas_unit_price && <div className={"stats__item-wrapper"}>
                                    <span className={"title"}>Gas Unit Price</span>
                                    <span className={"info"}>{concatString(Number(gas_unit_price) / 100000000, "", " APT")}</span>
                                </div>}
                                {max_gas_amount && <div className={"stats__item-wrapper"}>
                                    <span className={"title"}>Max Gas Limit</span>
                                    <span className={"info"}>{concatString(formatNumber(max_gas_amount), "", " Gas Units")}</span>
                                </div>}
                            </div>
                        </Plate>
                    </GridWrapper>}

                    {!(!proposer && !id && !epoch && !round) && <GridWrapper>
                        <Plate compressed min noMin>
                            <div className={"stats__item"}>
                                {proposer && <div className={"stats__item-wrapper"}>
                                    <span className={"title"}>Proposer</span>
                                    <span className={"info row"}>{shortenHashString(proposer)}<CopyText text={proposer} /></span>
                                </div>}
                                {id && <div className={"stats__item-wrapper"}>
                                    <span className={"title"}>ID</span>
                                    <span className={"info row"}>{shortenHashString(id)}<CopyText text={id} /></span>
                                </div>}
                                {epoch && <div className={"stats__item-wrapper"}>
                                    <span className={"title"}>Epoch</span>
                                    <span className={"info"}>{formatNumber(epoch)}</span>
                                </div>}
                                {round && <div className={"stats__item-wrapper"}>
                                    <span className={"title"}>Round</span>
                                    <span className={"info"}>{formatNumber(round)}</span>
                                </div>}
                            </div>
                        </Plate>
                    </GridWrapper>}
                </Grid>
            </GridWrapper>
            <GridWrapper gridWidth={6}>
                <Grid>
                    <GridWrapper>
                        <Plate compressed min noMin>
                            {state_change_hash && <div className={"stats__item-wrapper"}>
                                <span className={"title"}>State Change Hash</span>
                                <span className={"info row"}>{shortenHashString(state_change_hash, [0, 0])}<CopyText text={state_change_hash} /></span>
                            </div>}
                            {event_root_hash && <div className={"stats__item-wrapper"}>
                                <span className={"title"}>Event Root Hash</span>
                                <span className={"info row"}>{shortenHashString(event_root_hash, [0, 0])}<CopyText text={event_root_hash} /></span>
                            </div>}
                            {accumulator_root_hash && <div className={"stats__item-wrapper"}>
                                <span className={"title"}>Accumulator Root Hash</span>
                                <span className={"info row"}>{shortenHashString(accumulator_root_hash, [0, 0])}<CopyText text={accumulator_root_hash} /></span>
                            </div>}
                            {signature && <><div className={"stats__item-wrapper indent"}>
                                <span className={"title"}>Signature</span>
                            </div>
                            <CodeArea noPaddings data={signature} /></>}
                        </Plate>
                    </GridWrapper>
                </Grid>
            </GridWrapper>
        </Grid>
    );
};

export default TransactionOverview;
