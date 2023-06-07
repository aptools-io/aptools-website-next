// React
import React, { useEffect, useRef } from "react";

// Redux
import { useDispatch } from "react-redux";
import { setGeneralStatsData } from "src/scripts/redux/slices/statsGeneralSlice";
import { setProjectStatsData } from "src/scripts/redux/slices/statsProjectsSlice";

// Components
import { MainPage } from "src/components/pages";
import { generalStats, projects } from "src/scripts/api/requests";

// Scripts
import categories from "src/scripts/consts/categories";
import filtrateProjects from "src/scripts/util/filtrateProjects";

// websocket
import { aptosStats } from "src/scripts/websocket/connections";

const Home = (data: IApiProps) => {
    const ws = useRef<WebSocket>(null);
    const dispatch = useDispatch();

    useEffect(() => {
        aptosStats.openConnection(ws, dispatch);
        return () => ws.current.close();
    }, []);

    useEffect(() => {
        dispatch(setGeneralStatsData(data.general_stats || null));
        dispatch(setProjectStatsData(data.projects || null));
    }, [])

    return <MainPage />;
} 
export default Home;

export async function getServerSideProps() {
    const projectsUnfiltered = await projects.getData();
   
    return { props: {
        "general_stats": await generalStats.getData(),
        /* "contract_addresses": await contractAddresses.getData(),
        "dexes_volumes": await dexesVolumes.getData(), */
        "projects": filtrateProjects(projectsUnfiltered, categories),
        /* "transactions": await transactions.getData(),
        "contract_transactions": await contractTransactions.getData() */
    } };
}
