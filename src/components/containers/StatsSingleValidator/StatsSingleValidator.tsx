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


const StatsSingleValidator: React.FC<IComponent> = ({
    className 
}) => {
    const router = useRouter();
    const { id } = router.query || {};

    const { width } = useWindowSize();
    const mediaData = media(width);

    if(!width) return <></>;
  
    return (
        <Grid>
            <GridWrapper gridWidth={mediaData.validatorStats}>
                <Plate 
                    noMin 
                    transparent 
                    bordered 
                    /* className={classNames(transactionTypes(type).class)}  */
                    style={{ background: "transparent", color: "unset" }}
                >
                    <div className={"stats__top"}>
                        <div className={"stats__top-wrapper"}>
                            <div className={"stats__top-icon"}>
                                <Coins />
                            </div>
                            <strong className={"stats__top-title blue bold"}>Address</strong>
                        </div>
                        <div className={"stats__top-stats center row"}>
                            <span className={"title light m-left"}>
                                {mediaData.validatorHash(id as string)}
                            </span>
                            <CopyText big text={id as string} />
                            <Button>Follow</Button>
                        </div>
                    </div>
                </Plate>
            </GridWrapper>
            {/* <GridWrapper gridWidth={mediaData.transactionStats}>
                <Plate 
                    noMin 
                    transparent 
                    bordered 
                    style={{ background: "transparent", color: "unset" }}
                >
                    <div className={"stats__top"}>
                        <div className={"stats__top-wrapper"}>
                            <div className={"stats__top-icon"}>
                                <Coins />
                            </div>
                            <strong className={"stats__top-title blue bold"}>Balance</strong>
                        </div>
                        <div className={"stats__top-stats row"}>
                            <span className={"title light m-left"}>
                            </span>
                        </div>
                    </div>
                </Plate>
            </GridWrapper> */}
        </Grid>
    );
};

export default StatsSingleValidator;
