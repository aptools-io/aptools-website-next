// React
import React from "react";

// Components
import { MainPage } from "src/components/pages";

const Validators = () => <MainPage />;
export default Validators;

export async function getServerSideProps() {
    return { props: { } };
}
