interface IApiNftCollectionList {
    total: number;
    list: IApiNftCollection[]
}

interface IApiNftCollection {
    creator_address: string;
    name: string;
    rank: number;
    transfers: number;    
}

interface IApiNftCollectionGeneralInfo {
    about: string;
    creator_address: string;
    holders: number;
    maximum: string;
    name: string;
    total_supply: string;
    transfers: number;
    uri: string;
}

interface IApiNftCollectionTransfer {
    account: string;
    activit_type: string;
    age: number;
    amount: number;
    block: number;
    property_version: number;
    token_name: string;
    version: number;
}

interface IApiNftCollectionHolder {
    amount: number;
    owner: string;
    percentage: number;
    rank: number;
}

interface IApiNftCollectionPendingClaims {
    list: IApiNftCollectionPendingClaim[];
    total: number;
}

interface IApiNftCollectionInventories {
    total: number;
    list: IApiNftInventory[];
}

interface IApiNftInventory {
    name: string;
    owner: string;
    property_version: number;
    uri: string;
}


