// React
import React from "react";

// Components
import { MainPage } from "src/components/pages";

const Home = () => <MainPage />;
export default Home;

export async function getServerSideProps() {
    return { props: { } };
}
