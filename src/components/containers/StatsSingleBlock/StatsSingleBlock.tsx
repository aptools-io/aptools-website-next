// React
import React from "react";

// Next
import { useRouter } from "next/router";

// Styles
import classNames from "classnames";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// Components
import { Grid, GridWrapper } from "src/components/general";
import { Button, CopyText, Img, Plate } from "src/components/ui";

// Utils
import { Coins } from "src/components/svg";

import useWindowSize from "src/scripts/hooks/useWindowSize";
import { percentClass, transactionTypes } from "src/scripts/util/classes";
import media from "./data/adaptive";


const StatsSingleBlock: React.FC<IComponent> = ({
    className 
}) => {
    const router = useRouter();
    const { id } = router.query || {};
    const { block } = useSelector((state: IRootState) => state.blocks);
    const { 
        first_version, 
        last_version, 
        block_timestamp,
        block_height,
        transactions
    } = block || {};
    const transaction = transactions?.find(el => el.type === "block_metadata_transaction");
    const {
        proposer,
        epoch,
        round,
        expiration_timestamp_secs
    } = transaction || {};

    const { width } = useWindowSize();
    const mediaData = media(width);

    if(!width) return <></>;
  
    return (
        <Grid>
            <GridWrapper gridWidth={mediaData.blockStats}>
                <Grid>
                    <GridWrapper>
                        <Plate noMin min compressed>
                            <div className={"stats__item"}>
                                {<div className={"stats__item-wrapper"}>
                                    <span className={"title"}>Version</span>
                                    <span className={"info break"}>{first_version} – {last_version}</span>
                                </div>}
                            </div>
                        </Plate>
                    </GridWrapper>
                    <GridWrapper>
                        <Plate noMin min compressed>
                            <div className={"stats__item"}>
                                {<div className={"stats__item-wrapper"}>
                                    <span className={"title"}>Timestamp</span>
                                    <span className={"info break"}>{block_timestamp}</span>
                                </div>}
                                {<div className={"stats__item-wrapper"}>
                                    <span className={"title"}>Block Height</span>
                                    <span className={"info break"}>{block_height}</span>
                                </div>}
                                {<div className={"stats__item-wrapper"}>
                                    <span className={"title"}>Expiration Timestamp</span>
                                    <span className={"info break"}>{expiration_timestamp_secs}</span>
                                </div>}
                            </div>
                        </Plate>
                    </GridWrapper>
                </Grid>
            </GridWrapper>
            <GridWrapper gridWidth={mediaData.blockStats}>
                <Grid>
                    <GridWrapper>
                        <Plate noMin min compressed>
                            <div className={"stats__item"}>
                                {<div className={"stats__item-wrapper"}>
                                    <span className={"title"}>Proposer</span>
                                    <span className={"info break"}>{proposer}</span>
                                </div>}
                                {<div className={"stats__item-wrapper"}>
                                    <span className={"title"}>Epoch</span>
                                    <span className={"info break"}>{epoch}</span>
                                </div>}
                                {<div className={"stats__item-wrapper"}>
                                    <span className={"title"}>Round</span>
                                    <span className={"info break"}>{round}</span>
                                </div>}
                            </div>
                        </Plate>
                    </GridWrapper>
                </Grid>
            </GridWrapper>
        </Grid>
    );
};

export default StatsSingleBlock;
