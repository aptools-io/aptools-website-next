// React
import React, { useEffect, useRef } from "react";

// Redux
import { useDispatch } from "react-redux";
import { setGeneralStatsData } from "src/scripts/redux/slices/statsGeneralSlice";
import { setProjectStatsData } from "src/scripts/redux/slices/statsProjectsSlice";

// Components
import { MainPage } from "src/components/pages";
import { contractAddresses, contractTransactions, dexesVolumes, generalStats, projects } from "src/scripts/api/requests";

// Scripts
import categories from "src/scripts/consts/categories";
import filtrateProjects from "src/scripts/util/filtrateProjects";

// websocket
import { aptosStats } from "src/scripts/websocket/connections";
import { setDexesVolumesStatsData } from "src/scripts/redux/slices/statsDexesVolumesSlice";
import { setAddressesData, setTransactionsData } from "src/scripts/redux/slices/statsAddressesTransactionsSlice";

const Home = (data: IApiProps) => {
    const ws = useRef<WebSocket>(null);
    const dispatch = useDispatch();
    console.log(data);

    useEffect(() => {
        aptosStats.openConnection(ws, dispatch);
        return () => ws.current.close();
    }, []);

    useEffect(() => {
        dispatch(setGeneralStatsData(data.general_stats || null));
        dispatch(setProjectStatsData(data.projects || null));
        dispatch(setDexesVolumesStatsData(data.dexes_volumes || null));
        dispatch(setAddressesData(data.contract_addresses || null));
        dispatch(setTransactionsData(data.contract_transactions || null));
    }, [])

    return <MainPage />;
} 
export default Home;

export async function getServerSideProps() {
    const projectsUnfiltered = await projects.getData();
   
    return { props: {
        "general_stats": await generalStats.getData() || {},
        "contract_addresses": await contractAddresses.getData() || [],
        "contract_transactions": await contractTransactions.getData() || [],
        "dexes_volumes": await dexesVolumes.getData() || [],
        "projects": filtrateProjects(projectsUnfiltered, categories) || [],
        /* "transactions": await transactions.getData(), */
       
    } };
}
