// React
import React, { useEffect, useState } from "react";

// Next
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

// Components
import { MainBanner, Projects, StatsBlockchainActivity, StatsTransactions, StatsValidator } from "src/components/containers";
import { Grid, GridWrapper } from "src/components/general";
import { CategoryTitle, Plate } from "src/components/ui";

// websocket
import { WSocket } from "src/scripts/websocket/websocket";
import { stats } from "src/scripts/websocket/connections";

// public
import aptos from "../../../../public/static/images/svg/aptos.svg"

const MainPage: React.FC<{data: any}> = ({ data }) => {
    const { t } = useTranslation("common");
    const router = useRouter();
    const [webSocket, setWebSocket] = useState<WSocket>(null);
    const [statsData, setStatsData] = useState<IWSocketStats>(null);

    const { general_stats, projects } = data || {};

    const handleCloseConnection = () => stats.closeConnection(webSocket);

    useEffect(() => {
        if(!webSocket && !router.isReady) return;
        setWebSocket(stats.openConnection(setStatsData));
        console.log(data);
    }, [router]);

    useEffect(() => {
        if(webSocket) {
            router.events.on("routeChangeStart", handleCloseConnection);
            return () => router.events.off("routeChangeStart", handleCloseConnection);
        }
    }, [webSocket]);

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

            {/* BOTTOM */}
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

            {/* PROJECTS ON THE APTOS BLOCKCHAIN */}
            <Grid>
                <GridWrapper>
                    <CategoryTitle title={"PROJECTS ON THE APTOS BLOCKCHAIN"} />
                    <Projects projects={projects} />
                    <Grid>
                        <GridWrapper gridWidth={5}>
                            <Plate image={aptos.src} title={t("Aptos")}>
                                asdasd
                            </Plate>
                        </GridWrapper>
                        <GridWrapper gridWidth={5}>
                            <Plate title={t("Gas price")}>
                                asdasd
                            </Plate>
                        </GridWrapper>
                    </Grid>
                </GridWrapper>
            </Grid>

            {/* DEX */}
            <Grid>
                <GridWrapper>
                    <CategoryTitle title={"DEX"} />
                    
                </GridWrapper>
            </Grid>

            {/* Blockchain Stats */}
            <Grid>
                <GridWrapper>
                    <CategoryTitle title={"Blockchain Stats"} />
                    
                </GridWrapper>
            </Grid>
        </>
    );
};


export default MainPage;
