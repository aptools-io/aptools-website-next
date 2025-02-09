const getTransactionType = (type: string) => {
    switch (type) {
        case "user_transaction":
            return {
                name: "UserTransaction",
                color: "blue"
            };
        case "state_checkpoint_transaction":
            return {
                name: "StateCheckpoint",
                color: "green"
            };
        case "block_metadata_transaction":
            return {
                name: "BlockMetadata",
                color: "red"
            };
        case "block_epilogue_transaction":
            return {
                name: "BlockEpilogue",
                color: "red"
            };
        default:
            return {
                name: "null",
                color: ""
            };
    }
};

export { getTransactionType };
