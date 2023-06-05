// React
import React, { useEffect, useState } from "react";

// Next
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

// Components
import { MainBanner, StatsBlockchainActivity, StatsTransactions, StatsValidator } from "src/components/containers";
import { Grid, GridWrapper } from "src/components/general";
import { CategoryTitle, Plate } from "src/components/ui";

// websocket
import { WSocket } from "src/scripts/websocket/websocket";
import { stats } from "src/scripts/websocket/connections";

const MainPage: React.FC<{data: any}> = ({ data }) => {
    const { t } = useTranslation("common");
    const router = useRouter();
    const [webSocket, setWebSocket] = useState<WSocket>(null);
    const [statsData, setStatsData] = useState<IWSocketStats>(null);

    const { general_stats } = data || {}

    useEffect(() => {
        if(!webSocket && !router.isReady) return;
        setWebSocket(stats.openConnection(setStatsData));

        return () => {
            if(webSocket) stats.closeConnection(webSocket);
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
                        <StatsValidator 
                            data={statsData} 
                            blockchainInfo={general_stats.blockchain_info} 
                        />
                    </Plate>
                </GridWrapper>
                <GridWrapper gridWidth={1}>
                    <Plate title={t("blockchain activity stats")}>
                        <StatsBlockchainActivity 
                            data={statsData} 
                            blockchainInfo={general_stats.blockchain_info} 
                        />
                    </Plate>
                </GridWrapper>
                <GridWrapper gridWidth={1}>
                    <Plate title={t("transactions per second")}>
                        <StatsTransactions 
                            blockchainInfo={general_stats.blockchain_info} 
                        />
                    </Plate>
                </GridWrapper>
            </Grid>

            <Grid>
                <GridWrapper>
                    <CategoryTitle title={"PROJECTS ON THE APTOS BLOCKCHAIN"} />
                    <Grid>
                        <GridWrapper>
                            еуіе
                        </GridWrapper>
                    </Grid>
                </GridWrapper>
            </Grid>

            
        </>
    );
};


export default MainPage;
