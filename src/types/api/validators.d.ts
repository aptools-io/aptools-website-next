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
            config: IApiValidator,
            voting_power: string;
        }[];
        total_voting_power?: string;
        total_joining_power?: string;
        pending_inactive?: [];
        pending_active?: [];
        consensus_scheme?: number;
        validator_index?: string;
        network_addresses?: string;
        fullnode_addresses?: string;
        consensus_pubkey?: string;
        authentication_key?: string;
        coin_register_events?: string;
        guid: IApiGuid
        key_rotation_events: {
            counter: string;
            guid: IApiGuid
        }
        rotation_capability_offer: {
            for: {
                vec: []
            }
        }
        sequence_number: string;
        signer_capability_offer: {
            for: {
                vec: []
            }
        }
        withdraw_stake_events?: IApiValidatorGuid
        update_network_and_fullnode_addresses_events?: IApiValidatorGuid
        unlock_stake_events?: IApiValidatorGuid
        set_operator_events?: IApiValidatorGuid
        rotate_consensus_key_events?: IApiValidatorGuid
        reactivate_stake_events?: IApiValidatorGuid
        leave_validator_set_events?: IApiValidatorGuid
        join_validator_set_events?: IApiValidatorGuid
        initialize_validator_events?: IApiValidatorGuid
        increase_lockup_events?: IApiValidatorGuid
        distribute_rewards_events?: IApiValidatorGuid
        add_stake_events?: IApiValidatorGuid
        delegated_voter: string;
        active: {
            value: string;
        }
        pending_inactive?: {
            value: string;
        }
        pending_active?: {
            value: string;
        }
        operator_address?: string;
        locked_until_secs?: string;
    },
    type: string
}

interface IApiValidatorGuid {
    counter: string;
    guid: IApiGuid;
}

interface IApiValidator {
    consensus_pubkey?: string;
    fullnode_addresses?: string;
    network_addresses?: string;
    validator_index?: string;
}