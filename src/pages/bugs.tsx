import { useEffect } from "react";
import { ClientSideErrorPage } from "src/components/pages";

const test = () => {
    const badCode = "const s;";
    eval(badCode); // eslint-disable-line no-eval
};

const BugsPage = () => {
    return (
        <>
            <button
                style={{ width: 200, height: 200, backgroundColor: "red" }}
                onClick={test}></button>
        </>
    );
};

export async function getServerSideProps(context) {
    test();
    return {
        props: {}
    };
}
export default BugsPage;
