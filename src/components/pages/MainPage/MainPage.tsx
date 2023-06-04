// React
import React, { useEffect, useState } from "react";

// Next
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

// Components
import { MainBanner, StatsBlockchainActivity, StatsTransactions, StatsValidator } from "src/components/containers";
import { Grid, GridWrapper } from "src/components/general";
import { Plate } from "src/components/ui";
import { WSocket } from "src/scripts/websocket/websocket";
import stats from "src/scripts/websocket/connections/wsStats";

// websocket

const MainPage: React.FC<{data: any}> = ({ data }) => {
    const { t } = useTranslation("common");
    const router = useRouter();

    const [ws, setWs] = useState(null);
    const [wsData, setWsData] = useState(null);

    const { general_stats } = data;

    useEffect(() => {
        /* if(ws) return;
        setWs(stats.openConnection(setWsData));
        console.log(ws) */
        if(router.isReady) {
            console.log("test")
        }
    }, [router]);


    return (
        <>
            <Grid>
                <GridWrapper>
                    <MainBanner 
                        title={t("main banner title")}
                        description={t("main banner description")}
                    />
                </GridWrapper>
            </Grid>
            <Grid columns={3}>
                <GridWrapper gridWidth={1}>
                    <Plate title={t("validator stats")}>
                        <StatsValidator />
                    </Plate>
                </GridWrapper>
                <GridWrapper gridWidth={1}>
                    <Plate title={t("blockchain activity stats")}>
                        <StatsBlockchainActivity />
                    </Plate>
                </GridWrapper>
                <GridWrapper gridWidth={1}>
                    <Plate title={t("transactions per second")}>
                        <StatsTransactions />
                    </Plate>
                </GridWrapper>
            </Grid>
        </>
    );
}


export default MainPage;
