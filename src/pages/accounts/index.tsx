// React
import React from "react";

// Components
import { MainPage } from "src/components/pages";
import { contractAddresses, contractTransactions, dexesVolumes, generalStats, projects, transactions } from "src/scripts/api/requests";

const Home = (data) => <MainPage />;
export default Home;

export async function getServerSideProps() {
    return { props: {
    } };
}
