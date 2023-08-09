
interface IApiProps {
    "headers": IncomingHttpHeaders;
    "general_stats"?: IApiGeneralStats;
    "projects"?: IApiProject[];
    "dexes_volumes"?: IApiDexVolume[];
    "contract_addresses"?: IApiAdressesTransactions[];
    "contract_transactions"?: IApiAdressesTransactions[];
    "transactions": IApiTransaction[];
    "transaction_single": IApiTransactionInfo
    "dex_single": IApiDexSingle;
    "news": IApiNews;
    "news_categories": IApiNewsCategory[];
    "accounts_stats": IApiAccountsStats;
    "accounts_wallets": IApiAccountsWallets;
    "account_stats": IApiAccountStats;
    "account_profitabilities": IApiAccountProfitabilities;
    "validators_locations": IApiValidatorLocation[],
    "validators_blocks": IApiValidatorsBlocks,
    "validators": IApiValidators,
    "validator": [IApiValidators, IApiValidators, IApiValidators],
    "blockchain": IApiBlockchainMainData;
    "blocks": IApiBlock[],
    "block": IApiBlock
}

interface IApiGuid {
    id: {
        addr: string;
        creation_num: string;
    }
    guid_creation_num?: string;
}