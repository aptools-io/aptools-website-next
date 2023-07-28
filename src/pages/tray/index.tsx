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
import { contractAddresses, contractTransactions, dexesVolumes, generalStats, projects, transactions } from "src/scripts/api/requests";

// Scripts
import categories from "src/scripts/consts/categories";
import filtrateProjects from "src/scripts/util/filtrateProjects";

// Websocket
import { aptosStats } from "src/scripts/websocket/connections";
import { setPageTitle } from "src/scripts/redux/slices/pageTitleSlice";


const Home = (data: IApiProps) => {
    const ws = useRef<WebSocket>(null);
    const dispatch = useDispatch();
    
    useEffect(() => {
        aptosStats.openConnection(ws, dispatch);
        return () => { ws.current.close(); }; 
    }, [dispatch]);

    

    useEffect(() => {
        dispatch(setHeaders(data.headers) || null);
        generalStats.getData().then((e: unknown) => {
            const data = e as IApiGeneralStats;
            dispatch(setGeneralStatsData(data || null));
        })
        projects.getData().then((e: unknown) => {
            const data = filtrateProjects(e as IApiProject[], categories) as IApiProject[];
            dispatch(setProjectStatsData(data || null));
        })
       
        
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
    const projectsUnfiltered = await projects.getData() || []; 
    const { req } = context;
    return { props: {
        "overflow": true,
        "headers": req.headers,
        /* "general_stats": await generalStats.getData() || {}, */
        "contract_addresses": await contractAddresses.getData() || [],
        "contract_transactions": await contractTransactions.getData() || [],
        "dexes_volumes": await dexesVolumes.getData() || [],
        "projects": filtrateProjects(projectsUnfiltered, categories) || [],
        "transactions": await transactions.getData() || [],
    } };
}
