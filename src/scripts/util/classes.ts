import classNames from "classnames";

const percentClass = (number: string) => {
    const negative = (Number(number) < 0 || Number.isNaN(number)) && Number(number) !== 0;
    const positive = (Number(number) > 0 || Number.isNaN(number)) && Number(number) !== 0;
    const neutral = Number(number) === 0;

    return classNames([
        "additive-percent",
        ...neutral ? ["neutral"] : [],
        ...positive ? ["positive"] : [],
        ...negative ? ["negative"] : [],
    ]);
};

const transactionTypes = (type?: string) => {

    return { 
        types: {
            "state_checkpoint_transaction": "StateCheckout",
            "user_transaction": "UserTransaction",
            "block_metadata_transaction": "BlockMetedata"
        }[type],
        class: [
            "types",
            { "success": type === "state_checkpoint_transaction" },
            { "transaction": type === "user_transaction" },
            { "block": type === "block_metadata_transaction" }
        ]
    };
};

export { percentClass, transactionTypes };