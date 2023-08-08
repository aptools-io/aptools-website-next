// React
import React, { useEffect } from "react";


// Components;
import { BlocksPage } from "src/components/pages";

// Redux
import { useDispatch } from "react-redux";
import { setPageTitle } from "src/scripts/redux/slices/pageTitleSlice";

const Blocks = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle("Latest Blocks"));
    }, []);

    return <BlocksPage />;
};
export default Blocks;

export async function getServerSideProps() {
    return { props: { } };
}
