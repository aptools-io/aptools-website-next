interface IApiBlock {
    block_hash: string;
    block_height: string;
    block_timestamp: string;
    first_version: string;
    last_version: string;
    transactions?: IApiTransactionInfo[] | null
}