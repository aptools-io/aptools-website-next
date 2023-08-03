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
import { CopyText, Img, Plate } from "src/components/ui";
import LinesEllipsis from "react-lines-ellipsis";
import responsiveHOC from "react-lines-ellipsis/lib/responsiveHOC";

// Utils
import { concatString } from "src/scripts/util/strings";
import { formatNumber, setSign } from "src/scripts/util/numbers";
import { Coins, Copy, CopyBig, TransactionBlock, TransactionProcess, Wallet , TransactionCheckpoint } from "src/components/svg";
import { getImageFromApi } from "src/scripts/util/image";
import { getBaseHttpsUrl } from "src/scripts/util/data";
import useWindowSize from "src/scripts/hooks/useWindowSize";
import { copyText } from "src/scripts/util/copyText";
import { percentClass, transactionTypes } from "src/scripts/util/classes";
import styles from "./StatsAccount.module.scss";
import media from "./data/adaptive";


const StatsTransaction: React.FC<IComponent> = ({
    className 
}) => {
    const { transaction } = useSelector((state: IRootState) => state.statsTransactions);
    const { type } = transaction || {};
    const { width } = useWindowSize();
    const mediaData = media(width);

    const router = useRouter();
    const { query } = router;

    if(!width) return <></>;

    const transactionTypeIcons = {
        "state_checkpoint_transaction": <TransactionCheckpoint />,
        "user_transaction": <TransactionProcess />,
        "block_metadata_transaction": <TransactionBlock /> 
    };
  
    return (
        <Grid>
            <GridWrapper gridWidth={mediaData.transactionStats}>
                <Plate 
                    noMin 
                    transparent 
                    bordered 
                    className={classNames(transactionTypes(type).class)} 
                    style={{ background: "transparent", color: "unset" }}
                >
                    <div className={"stats__top"}>
                        <div className={"stats__top-wrapper"}>
                            <div 
                                className={classNames([
                                    "stats__top-icon", 
                                    ...transactionTypes(type).class
                                ])}>
                                {transactionTypeIcons[type]}
                               {/*  <Wallet /> */}
                            </div>
                        </div>
                        <div className={"stats__top-stats row"}>
                            <span className={"title light m-left"}>
                                {mediaData.transactionHash(query.id as string)}
                            </span>
                            <CopyText big text={query.id as string} />
                        </div>
                    </div>
                </Plate>
            </GridWrapper>
        </Grid>
    );
};

export default StatsTransaction;
