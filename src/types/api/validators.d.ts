interface IApiValidatorLocation {
    city: string;
    country: string;
    latitude: number;
    longitude: number;
    epoch: number;
    peer_id: string;
    region: string;
}

interface IApiValidatorsBlocks {
    data: {
        validators: {
            failed_proposals: string;
            successful_proposals: string;
        }[]
    },
    type: string
}

interface IApiValidators {
    data: {
        active_validators: {
            addr: string;
            config: {
                consensus_pubkey: string;
                fullnode_addresses: string;
                network_addresses: string;
                validator_index: string;
            },
            voting_power: string;
        }[];
        total_voting_power?: string;
        total_joining_power?: string;
        pending_inactive?: [];
        pending_active?: [];
        consensus_scheme?: number;
    },
    type: string
}