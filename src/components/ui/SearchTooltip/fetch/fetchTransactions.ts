import { transactions } from "src/scripts/api/requests";

const fetchTransactionByHash = (terms, transaction, setTransaction) => {
    let ready = true;

    if (terms.indexOf("0x") === -1) {
        setTransaction({
            name: terms,
            data: null,
            loading: false
        });
        return;
    }
    setTransaction({ ...transaction, loading: true });
    transactions.getSingleTransactionData(terms).then((response) => {
        if (ready)
            setTransaction({
                name: terms,
                data: response,
                loading: false
            });
    });

    return () => {
        ready = false;
    };
};

const fetchTransactionByVersion = (terms, transaction, setTransaction) => {
    let ready = true;

    if (Number.isNaN(Number(terms))) {
        setTransaction({
            name: terms,
            data: null,
            loading: false
        });
        return;
    }
    setTransaction({ ...transaction, loading: true });
    transactions.getSingleTransactionDataByVersion(terms).then((response) => {
        if (ready)
            setTransaction({
                name: terms,
                data: response,
                loading: false
            });
    });

    return () => {
        ready = false;
    };
};

export { fetchTransactionByHash, fetchTransactionByVersion };
