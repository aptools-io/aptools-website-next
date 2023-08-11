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

interface IApiNftCollectionInventories {
    total: number;
    list: IApiNftInventory[]
}

interface IApiNftInventory {
    name: string;
    owner: string;
    propery_version: number;
    uri: string;
}
