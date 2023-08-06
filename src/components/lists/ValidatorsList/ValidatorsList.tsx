// React
import React, { useState } from "react";

// Redux
import { useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// Styles
import classNames from "classnames";
import { List, ListHeader, Paginator } from "src/components/ui";
import styles from "./ValidatorsList.module.scss";

// Components

// Options
import { columnNames, columns } from "./data/listOptions";
import { defaultPerPage, perPages } from "src/scripts/consts/perPages";
import { useRouter } from "next/router";

const ValidatorsList: React.FC<IComponent> = ({
    className 
}) => {
    const { validatorsBlocks, validators, validatorsLocations } = useSelector((state: IRootState) => state.validators);
    const router = useRouter();
    const { limit = perPages[2], page = 1 } = router.query;
    const [perPage, setPerPage] = useState(perPages.findIndex(x => x === Number(limit)) !== -1 ? Number(limit) : defaultPerPage);
    const [currentPage, setCurrentPage] = useState(Number(page) || 1);
    const hardSorting = useState<{ key: string; sort: string }>({ key: "votingPower", sort: "desc" });

    const classes = classNames([
        styles["validators"],
        "list",
        className
    ]);

    if(!validatorsBlocks || !validators) return <></>;

    const data = validators?.data?.active_validators?.map((validator, index) => {
        const { addr, voting_power: votingPower, config } = validator;

        const geo_data = validatorsLocations?.find((geoData) => `0x${geoData.peer_id}` === validator.addr) || null;
        return { 
            addr,
            votingPower,
            blocks: validatorsBlocks?.data?.validators?.[index]?.successful_proposals || "",
            id: config?.validator_index,
            location: geo_data?.city || "-"
        };
    }) || [];

    return (
        <div className={classes}>
           {/*  <strong className={"list__title"}>
                <span>Top DEXes by Users/Transactions</span>
            </strong> */}
            <Paginator 
                changePerPage
                perPageKey={"limit"}
                pageKey={"page"}
                page={currentPage} 
                perPage={perPage} 
                setPerPage={setPerPage} 
                total={data?.length} 
                onChangePage={(page) => {
                    setCurrentPage(page);
                }}
                onChangePerPage={(perPage) => {
                    setPerPage(perPage);
                }}
            >
                <ListHeader 
                    columnNames={columnNames} 
                    columns={columns} 
                    data={data}
                    hardSorting={hardSorting}
                >
                    <List adoptMobile slice={[(currentPage - 1) * perPage, currentPage * perPage]} />
                </ListHeader>
            </Paginator>
        </div>
    );
};

export default ValidatorsList;
