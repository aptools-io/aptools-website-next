
interface IApiProps {
    "headers": IncomingHttpHeaders;
    "general_stats"?: IApiGeneralStats;
    "projects"?: IApiProject[];
    "dexes_volumes"?: IApiDexVolume[];
    "contract_addresses"?: IApiAdressesTransactions[];
    "contract_transactions"?: IApiAdressesTransactions[];
    "transactions": IApiTransaction[];
    "dex_single": IApiDexSingle;
    "news": IApiNews;
    "news_categories": IApiNewsCategory[];
    "accounts_stats": IApiAccountsStats;
    "accounts": IApiAccount[];
    "account_stats": IApiAccountStats;
    "account_profitabilities": IApiAccountProfitabilities;
}