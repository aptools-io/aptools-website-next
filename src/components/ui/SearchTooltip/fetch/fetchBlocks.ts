import { blocks } from "src/scripts/api/requests";

const fetchBlockByHeight = (terms, block, setBlock) => {
    let ready = true;

    if (Number.isNaN(Number(terms))) {
        setBlock({
            name: terms,
            data: null,
            loading: false
        });
        return;
    }
    setBlock({ ...block, loading: true });
    blocks.getBlockByHeightData(terms, false).then((response) => {
        if (ready)
            setBlock({
                name: terms,
                data: response,
                loading: false
            });
    });

    return () => {
        ready = false;
    };
};

const fetchBlockByVersion = (terms, block, setBlock) => {
    let ready = true;

    if (Number.isNaN(Number(terms))) {
        setBlock({
            name: terms,
            data: null,
            loading: false
        });
        return;
    }
    setBlock({ ...block, loading: true });
    blocks.getBlockByVersionData(terms, false).then((response) => {
        if (ready)
            setBlock({
                name: terms,
                data: response,
                loading: false
            });
    });

    return () => {
        ready = false;
    };
};

export { fetchBlockByHeight, fetchBlockByVersion };
