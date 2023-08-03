interface IApiTransaction {
    "version": number;
    "hash": string;
    "type": string;
    "amount": number;
    "gas_used": string;
    "success": boolean;
    "timestamp": string;
}

interface IApiTransactionInfo {
    "accumulator_root_hash": string;
    "changes": IApiTransactionInfoChange[];
    "event_root_hash": string;
    "events": IApiTransactionInfoEvent[];
    "expiration_timestamp_secs": string;
    "gas_unit_price": string;
    "gas_used": string;
    "hash": string;
    "max_gas_amount": string;
    "payload": {
        "arguments": string[];
        "function": string;
        "type": string;
        "type_arguments": string[]
    };
    "signature": {
        "public_key": string;
        "signature": string;
        "type": string;
    };
    "state_change_hash": string;
    "state_checkpoint_hash": string;
    "success": boolean;
    "sender": string;
    "timestamp": string;
    "type": string;
    "version": string;
    "vm_status": string;
}

interface IApiTransactionInfoChange {
    "address": string;
    "data": {
        "data": IApiTransactionInfoData;
        "type": string;
    };
    "state_key_hash": string;
    "type": string;
}

interface IApiTransactionInfoData {
    "coin": {
        "value": string;
    };
    "coin_amount_event": {
        "counter": string;
        "guid": {
            "id": {
                "addr": string;
                "creation_num": string
            }
        }
    };
    "coin_amount_event_last_time": string;
}

interface IApiTransactionInfoEvent {
    "data": {
        "amount": string
    };
    "guid": {
        "account_address": string;
        "creation_number": string
    };
    "sequence_number": string;
    "type": string;
}