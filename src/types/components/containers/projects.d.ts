interface IProjectsProps extends IComponent {
    projects?: {
        "wallet"?: IApiProject[]
        "marketplace"?: IApiProject[] 
        "nft"?: IApiProject[] 
        "launchpad"?: IApiProject[] 
        "dexes"?: IApiProject[] 
        "infrastructure"?: IApiProject[] 
        "gaming"?: IApiProject[]
        "defi"?: IApiProject[]
        "tooling"?: IApiProject[]
        "bridges"?: IApiProject[]
        "explorers"?: IApiProject[]
        "security"?: IApiProject[]
        "stablecoins"?: IApiProject[]
    }
}