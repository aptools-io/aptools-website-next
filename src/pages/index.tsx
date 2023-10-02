// React
import React, { useEffect, useRef } from "react";

// Redux
import { useDispatch } from "react-redux";
import { setGeneralStatsData } from "src/scripts/redux/slices/statsGeneralSlice";
import { setProjectStatsData } from "src/scripts/redux/slices/statsProjectsSlice";
import { setDexesVolumesStatsData } from "src/scripts/redux/slices/statsDexesVolumesSlice";
import { setAddressesData, setTransactionsData } from "src/scripts/redux/slices/statsAddressesTransactionsSlice";
import { setCoinTransactions } from "src/scripts/redux/slices/statsTransactionsSlice";
import { setHeaders } from "src/scripts/redux/slices/headersSlice";

// Components
import { MainPage } from "src/components/pages";

// API
import { contractAddresses, contractTransactions, dexesVolumes, generalStats, logger, projects, transactions } from "src/scripts/api/requests";

// Scripts
import categories from "src/scripts/consts/categories";
import filtrateProjects from "src/scripts/util/filtrateProjects";

// Websocket
import { aptosStats } from "src/scripts/websocket/connections";
import { setPageTitle } from "src/scripts/redux/slices/pageTitleSlice";
import { timeSpent } from "src/scripts/util/time";

const Home = (data: IApiProps) => {
    const ws = useRef<WebSocket>(null);
    const dispatch = useDispatch();

    useEffect(() => {
        aptosStats.openConnection(ws, dispatch);
        return () => {
            ws.current.close();
        };
    }, [dispatch]);

    useEffect(() => {
        dispatch(setHeaders(data.headers) || null);
        dispatch(setGeneralStatsData(data.general_stats || null));
        dispatch(setProjectStatsData(data.projects || null));
        dispatch(setDexesVolumesStatsData(data.dexes_volumes || null));
        dispatch(setAddressesData(data.contract_addresses || null));
        dispatch(setTransactionsData(data.contract_transactions || null));
        dispatch(setCoinTransactions(data.transactions) || null);
        dispatch(setPageTitle(""));
    }, [data, dispatch]);

    return <MainPage />;
};
export default Home;

export async function getServerSideProps(context) {
    const start = Date.now();
    const projectsUnfiltered = (await projects.getData()) || [];
    logger.postErrorToLogger("info", `Timer on index page #1. /projects. Message: ${timeSpent(start)}`, "");

    const { req } = context;

    const blockchainStatistics = (await generalStats.getBlockchainStatisticsData()) || ({} as any);
    logger.postErrorToLogger("info", `Timer on index page #2. /blockchain_statistics. Message: ${timeSpent(start)}`, "");

    const dexesStatistics = (await generalStats.getDexesStatisticsData()) || ({} as any);
    logger.postErrorToLogger("info", `Timer on index page #3. /dexes_statistics. Message: ${timeSpent(start)}`, "");

    const tokenStatistics = (await generalStats.getTokenStatisticsData()) || ({} as any);
    logger.postErrorToLogger("info", `Timer on index page #4. /tokens_statistics. Message: ${timeSpent(start)}`, "");

    const transactionsData = (await transactions.getData()) || [];
    logger.postErrorToLogger("info", `Timer on index page #5. /transactions. Message: ${timeSpent(start)}`, "");
    return {
        props: {
            overflow: true,
            headers: req.headers,
            general_stats:
                {
                    blockchain_info: {
                        ...blockchainStatistics,
                        low_high_price: tokenStatistics.low_high_price || {},
                        token_price_chart: tokenStatistics.token_price_chart || [],
                        trans_history: blockchainStatistics.transactions_history || [],
                        dex_trading_volume: dexesStatistics.dex_trading_volume || null,
                        total_value_locked: dexesStatistics.total_value_locked || null,
                        vol_24h: dexesStatistics.vol_24h || null
                    },

                    dex_tvl: dexesStatistics.dex_tvl_chart || [],
                    dex_volumes: dexesStatistics.dex_volumes_chart || [],
                    daily_unique_contract_addresses: dexesStatistics.dex_addresses_chart || [],
                    daily_contract_transactions: dexesStatistics.dex_transactions_chart || [],
                    markets: dexesStatistics.dex_markets || [],
                    token_statistics: tokenStatistics.token_statistics || [],
                    top_tokens_by_volume: tokenStatistics.top_tokens_by_volume || [],

                    top_statistics: blockchainStatistics.money_flow || {},
                    transactions_plot: blockchainStatistics.user_transactions_history || [],
                    addresses_plot: blockchainStatistics.addresses_plot || [],
                    daily_new_created_wallets: blockchainStatistics.daily_new_created_wallets || [],
                    active_unique_addresses: blockchainStatistics.active_unique_addresses || {}
                } || {},

            contract_addresses: dexesStatistics.dex_users_activity?.length
                ? dexesStatistics.dex_users_activity.map((item) => {
                      return {
                          ...item,
                          "24h": item?.["24h"]?.addresses,
                          all_time: item?.["all_time"]?.addresses,
                          week: item?.["week"]?.addresses
                      };
                  })
                : [],
            contract_transactions: dexesStatistics.dex_users_activity?.length
                ? dexesStatistics.dex_users_activity.map((item) => {
                      return {
                          ...item,
                          "24h": item?.["24h"]?.transactions,
                          all_time: item?.["all_time"]?.transactions,
                          week: item?.["week"]?.transactions
                      };
                  })
                : [],

            dexes_volumes: dexesStatistics.dexes_volumes || [],

            projects: filtrateProjects(projectsUnfiltered, categories) || [],
            transactions: transactionsData
        }
    };
}
