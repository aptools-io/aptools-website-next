import { accounts } from "src/scripts/api/requests";

const fetchAccounts = (terms, account, setAccount) => {
    let ready = true;

    if (terms.indexOf("0x") === -1) {
        setAccount({
            name: terms,
            data: null,
            loading: false
        });
        return;
    }
    setAccount({ ...account, loading: true });
    accounts.getAccountProfitabilitiesData(terms).then((response) => {
        if (ready)
            setAccount({
                name: terms,
                data: response,
                loading: false
            });
    });

    return () => {
        ready = false;
    };
};

export default fetchAccounts;
