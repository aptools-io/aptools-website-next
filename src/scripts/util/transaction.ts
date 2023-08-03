

const getAptChangeData = (change) => {
    /* if (
        "address" in change &&
        "data" in change &&
        "type" in change.data &&
        change.data.type === "0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>" &&
        "data" in change.data
    ) {
        return JSON.parse(JSON.stringify(change.data.data));
    } 
        return undefined; */
    
};

const isAptEvent = (event, transaction) => {
    /* const changes = "changes" in transaction ? transaction.changes : [];

    const aptEventChange = changes.filter((change) => {
        if ("address" in change && change.address === event.guid.account_address) {
            const data = getAptChangeData(change);
            if (data !== undefined) {
                const eventCreationNum = event.guid.creation_number;
                let changeCreationNum;
                if (event.type === "0x1::coin::DepositEvent") {
                    changeCreationNum = data.deposit_events.guid.id.creation_num;
                } else if (event.type === "0x1::coin::WithdrawEvent") {
                    changeCreationNum = data.withdraw_events.guid.id.creation_num;
                }
                if (eventCreationNum === changeCreationNum) {
                    return change;
                }
            }
        }
    });

    return aptEventChange.length > 0; */
};

const getBalanceMap = (transaction) => {
    /* const events = "events" in transaction ? transaction?.events : [];
    const accountToBalance = events.reduce((balanceMap, event) => {
        const addr = event.guid.account_address;
        if (event.type === "0x1::coin::DepositEvent" ||
            event.type === "0x1::coin::WithdrawEvent") {
            // deposit and withdraw events could be other coins
            // here we only care about APT events
            if (isAptEvent(event, transaction)) {
                if (!balanceMap[addr]) {
                    balanceMap[addr] = { amount: BigInt(0), amountAfter: "" };
                }
                const amount = BigInt(event.data.amount);
                if (event.type === "0x1::coin::DepositEvent") {
                    balanceMap[addr].amount += amount;
                }
                else {
                    balanceMap[addr].amount -= amount;
                }
            }
        }
        return balanceMap;
    }, {});
    return accountToBalance; */
};

const getTransactionAmount = (transaction) => {
    /* if (transaction?.type !== "user_transaction") {
        return undefined;
    }

    const accountToBalance = getBalanceMap(transaction);

    const [totalDepositAmount, totalWithdrawAmount] = Object.values(
        accountToBalance,
    ).reduce(
        ([totalDepositAmount, totalWithdrawAmount], value) => {
            if (value.amount > 0) {
                totalDepositAmount += value.amount;
            }
            if (value.amount < 0) {
                totalWithdrawAmount -= value.amount;
            }
            return [totalDepositAmount, totalWithdrawAmount];
        },
        [BigInt(0), BigInt(0)],
    );

   

    return totalDepositAmount > totalWithdrawAmount
        ? totalDepositAmount
        : totalWithdrawAmount; */
};

const getGasFeeValue = (gasUsed, gasUnitPrice) => {
    return (BigInt(gasUnitPrice) * BigInt(gasUsed)).toString();
};


export { getTransactionAmount, getGasFeeValue };