interface IApiProps {
    headers: IncomingHttpHeaders;
    general_stats?: IApiGeneralStats;
    projects?: IApiProject[];
    project?: IApiProject;
    other_projects?: IApiProject[];
    dexes_volumes?: IApiDexVolume[];
    contract_addresses?: IApiAdressesTransactions[];
    contract_transactions?: IApiAdressesTransactions[];
    transactions: IApiTransaction[];
    transaction_single: IApiTransactionInfo;
    dex_single: IApiDexSingle;
    news: IApiNews;
    news_categories: IApiNewsCategory[];
    accounts_stats: IApiAccountsStats;
    accounts_wallets: IApiAccountsWallets;
    account_stats: IApiAccountStats;
    account_profitabilities: IApiAccountProfitabilities;
    validators_locations: IApiValidatorLocation[];
    validators_blocks: IApiValidatorsBlocks;
    validators: IApiValidators;
    validator: [IApiValidators, IApiValidators, IApiValidators];
    blockchain: IApiBlockchainMainData;
    blocks: IApiBlock[];
    block: IApiBlock;
    nfts_collection_list: IApiNftCollectionList;
    nfts_collection_inventories: IApiNftCollectionInventories[];
    nfts_collection_general_info: IApiNftCollectionGeneralInfo;
    nfts_collection_transfers: IApiNftCollectionTransfer[];
    nfts_collection_inventory: IApiNftCollectionInventories;
    events: IApiEvent[];
}

interface IApiGuid {
    id: {
        addr: string;
        creation_num: string;
    };
    guid_creation_num?: string;
}
