
interface IApiProps {
    "headers": IncomingHttpHeaders;
    "general_stats"?: IApiGeneralStats;
    "projects"?: IApiProject[];
    "dexes_volumes"?: IApiDexVolume[];
    "contract_addresses"?: IApiAdressesTransactions[];
    "contract_transactions"?: IApiAdressesTransactions[];
    "transactions": IApiTransaction[]
}