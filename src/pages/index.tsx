// React
import React from "react";

// Components
import { MainPage } from "src/components/pages";
import { contractAddresses, contractTransactions, dexesVolumes, generalStats, projects, transactions } from "src/scripts/api/requests";

// Scripts
import categories from "src/scripts/consts/categories";
import filtrateProjects from "src/scripts/util/filtrateProjects";

const Home = (data) => <MainPage data={data} />;
export default Home;

export async function getServerSideProps() {
    const projectsUnfiltered = await projects.getData();
   
    return { props: {
        "general_stats": await generalStats.getData(),
        "contract_addresses": await contractAddresses.getData(),
        "dexes_volumes": await dexesVolumes.getData(),
        "projects": filtrateProjects(projectsUnfiltered, categories),
        "transactions": await transactions.getData(),
        "contract_transactions": await contractTransactions.getData()
    } };
}
