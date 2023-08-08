// React
import React from "react";

// Components
import { AccountPerformance, AccountTokenStats } from "src/components/charts";
import { Grid, GridWrapper } from "src/components/general";

// Styles
import classNames from "classnames";
import { AccountTokenPerformanceList } from "src/components/lists";
import useWindowSize from "src/scripts/hooks/useWindowSize";
import styles from "./ValidatorOverview.module.scss";
import media from "./data/adaptive";
import { IRootState } from "src/scripts/redux/store";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { CopyText, Plate } from "src/components/ui";
import { formatNumber } from "src/scripts/util/numbers";
import { concatString, shortenHashString } from "src/scripts/util/strings";

const ValidatorOverview: React.FC<IComponent> = ({
    className,
}) => {
    const router = useRouter();
    const { id } = router?.query;
    const { validator, validators } = useSelector((state: IRootState) => state.validators);
    const { operator_address, delegated_voter } = validator?.[0]?.data || {}
    const { validator_index, consensus_pubkey, fullnode_addresses, network_addresses } = validator?.[2]?.data || {}
    
    const { width } = useWindowSize();
    const mediaData = media(width);


    if(!width || !validator || !validators) return <></>;

    const votingPower = Number(validators?.data?.active_validators?.find(x => x.addr === id)?.voting_power) / 100000000;


    const classes = classNames([
        styles["validator-overview"],
        className
    ]);


    return (
        <div className={classes}>
            <Grid>
                <GridWrapper gridWidth={mediaData.validatorLeft}>
                    <Grid>
                        <GridWrapper>
                            <Plate compressed min noMin>
                                <div className={"stats__item"}>
                                    <div className={"stats__item-wrapper"}>
                                        <span className={"title"}>Voting Power</span>
                                        <span className={"info"}>{concatString(formatNumber(votingPower, 6), "", " APT") }</span>
                                    </div>
                                    <div className={"stats__item-wrapper"}>
                                        <span className={"title"}>Validator index</span>
                                        <span className={"info"}>{concatString(validator_index, "Validator #")}</span>
                                    </div>
                                </div>
                            </Plate>
                        </GridWrapper>
                    </Grid>
                </GridWrapper>
                <GridWrapper gridWidth={mediaData.validatorRight}>
                    <Grid>
                        <GridWrapper>
                            <Plate compressed min noMin>
                                <div className={"stats__item"}>
                                    {operator_address && <div className={"stats__item-wrapper flex-start"}>
                                        <span className={"title"}>Operator Address</span>
                                        <span className={"info row"}>{mediaData.hash(operator_address)}<CopyText text={operator_address} /></span>
                                    </div>}
                                    {delegated_voter && <div className={"stats__item-wrapper flex-start"}>
                                        <span className={"title"}>Delegated Voter</span>
                                        <span className={"info row"}>{mediaData.hash(delegated_voter)}<CopyText text={delegated_voter} /></span>
                                    </div>}
                                    {votingPower && <div className={"stats__item-wrapper flex-start"}>
                                        <span className={"title"}>Status</span>
                                        <span className={"info success-color"}>In-Active</span>
                                    </div>}
                                    
                                </div>
                            </Plate>
                        </GridWrapper>
                        <GridWrapper>
                            <Plate compressed min noMin>
                                <div className={"stats__item"}>
                                    {consensus_pubkey && <div className={"stats__item-wrapper flex-start"}>
                                        <span className={"title"}>Consensus Pubkey</span>
                                        <span className={"info row"}>{mediaData.shortenHash(consensus_pubkey)}<CopyText text={consensus_pubkey} /></span>
                                    </div>}
                                    {fullnode_addresses && <div className={"stats__item-wrapper flex-start"}>
                                        <span className={"title"}>Fullnode Addresses</span>
                                        <span className={"info row"}>{mediaData.shortenHash(fullnode_addresses)}<CopyText text={fullnode_addresses} /></span>
                                    </div>}
                                    {network_addresses && <div className={"stats__item-wrapper flex-start"}>
                                        <span className={"title"}>Network Addresses</span>
                                        <span className={"info row"}>{mediaData.shortenHash(network_addresses)}<CopyText text={network_addresses} /></span>
                                    </div>}
                                </div>
                                
                            </Plate>
                        </GridWrapper>
                    </Grid>
                </GridWrapper>
            </Grid>
        </div>
    );
};

export default ValidatorOverview;
