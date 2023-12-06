// React
import React, { useEffect, useState } from "react";

// Next
import { useRouter } from "next/router";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// Styles
import classNames from "classnames";
import { List, ListHeader, Paginator } from "src/components/ui";
import { perPages, defaultPerPage } from "src/scripts/consts/perPages";

// Options
import { authMiddleware } from "src/scripts/api/middleware";
import { setApiKeys } from "src/scripts/redux/slices/userApiKeysSlice";
import { notify } from "src/scripts/common/notification";
import { columnNames, columns } from "./data/listOptions";
import styles from "./AccountApiList.module.scss";

// Consts
const dummyData = {
    data: [
        {
            id: "2dcf2b23-9ed5-4770-85be-31482d110bbc",
            key: "3a6a7be0a41cb3e450c1c7a6f50bf03dba532d4adf1cfc1bf0e2241f795d",
            active: false,
            validateIp: true,
            allowedIps: ["127.0.0.1", "127.0.0.2"],
            createdAt: "2023-11-01T08:30:30.000Z"
        },
        {
            id: "91d00182-ca38-4b72-bd8d-598daab20aa8",
            key: "3a6a7be0a41cb3e450c1c7a6f50bf03dba532d4adf1cfc1bf0e2241f795d",
            active: true,
            validateIp: true,
            allowedIps: ["127.0.0.1"],
            createdAt: "2023-11-01T08:20:30.000Z"
        },
        {
            id: "91d00182-ca38-4b72-bd8d-598daab20aa8",
            key: "3a6a7be0a41cb3e450c1c7a6f50bf03dba532d4adf1cfc1bf0e2241f795d",
            active: true,
            validateIp: true,
            allowedIps: ["127.0.0.1"],
            createdAt: "2023-11-01T08:20:30.000Z"
        },
        {
            id: "91d00182-ca38-4b72-bd8d-598daab20aa8",
            key: "3a6a7be0a41cb3e450c1c7a6f50bf03dba532d4adf1cfc1bf0e2241f795d",
            active: true,
            validateIp: true,
            allowedIps: ["127.0.0.1"],
            createdAt: "2023-11-01T08:20:30.000Z"
        },
        {
            id: "91d00182-ca38-4b72-bd8d-598daab20aa8",
            key: "3a6a7be0a41cb3e450c1c7a6f50bf03dba532d4adf1cfc1bf0e2241f795d",
            active: true,
            validateIp: true,
            allowedIps: ["127.0.0.1"],
            createdAt: "2023-11-01T08:20:30.000Z"
        },
        {
            id: "91d00182-ca38-4b72-bd8d-598daab20aa8",
            key: "3a6a7be0a41cb3e450c1c7a6f50bf03dba532d4adf1cfc1bf0e2241f795d",
            active: true,
            validateIp: true,
            allowedIps: ["127.0.0.1"],
            createdAt: "2023-11-01T08:20:30.000Z"
        },
        {
            id: "91d00182-ca38-4b72-bd8d-598daab20aa8",
            key: "3a6a7be0a41cb3e450c1c7a6f50bf03dba532d4adf1cfc1bf0e2241f795d",
            active: true,
            validateIp: true,
            allowedIps: ["127.0.0.1"],
            createdAt: "2023-11-01T08:20:30.000Z"
        },
        {
            id: "91d00182-ca38-4b72-bd8d-598daab20aa8",
            key: "3a6a7be0a41cb3e450c1c7a6f50bf03dba532d4adf1cfc1bf0e2241f795d",
            active: true,
            validateIp: true,
            allowedIps: ["127.0.0.1"],
            createdAt: "2023-11-01T08:20:30.000Z"
        },
        {
            id: "91d00182-ca38-4b72-bd8d-598daab20aa8",
            key: "3a6a7be0a41cb3e450c1c7a6f50bf03dba532d4adf1cfc1bf0e2241f795d",
            active: true,
            validateIp: true,
            allowedIps: ["127.0.0.1"],
            createdAt: "2023-11-01T08:20:30.000Z"
        },
        {
            id: "91d00182-ca38-4b72-bd8d-598daab20aa8",
            key: "3a6a7be0a41cb3e450c1c7a6f50bf03dba532d4adf1cfc1bf0e2241f795d",
            active: true,
            validateIp: true,
            allowedIps: ["127.0.0.1"],
            createdAt: "2023-11-01T08:20:30.000Z"
        },
        {
            id: "91d00182-ca38-4b72-bd8d-598daab20aa8",
            key: "3a6a7be0a41cb3e450c1c7a6f50bf03dba532d4adf1cfc1bf0e2241f795d",
            active: true,
            validateIp: true,
            allowedIps: ["127.0.0.1"],
            createdAt: "2023-11-01T08:20:30.000Z"
        },
        {
            id: "91d00182-ca38-4b72-bd8d-598daab20aa8",
            key: "3a6a7be0a41cb3e450c1c7a6f50bf03dba532d4adf1cfc1bf0e2241f795d",
            active: true,
            validateIp: true,
            allowedIps: ["127.0.0.1"],
            createdAt: "2023-11-01T08:20:30.000Z"
        },
        {
            id: "91d00182-ca38-4b72-bd8d-598daab20aa8",
            key: "3a6a7be0a41cb3e450c1c7a6f50bf03dba532d4adf1cfc1bf0e2241f795d",
            active: true,
            validateIp: true,
            allowedIps: ["127.0.0.1"],
            createdAt: "2023-11-01T08:20:30.000Z"
        },
        {
            id: "91d00182-ca38-4b72-bd8d-598daab20aa8",
            key: "3a6a7be0a41cb3e450c1c7a6f50bf03dba532d4adf1cfc1bf0e2241f795d",
            active: true,
            validateIp: true,
            allowedIps: ["127.0.0.1"],
            createdAt: "2023-11-01T08:20:30.000Z"
        },
        {
            id: "91d00182-ca38-4b72-bd8d-598daab20aa8",
            key: "3a6a7be0a41cb3e450c1c7a6f50bf03dba532d4adf1cfc1bf0e2241f795d",
            active: true,
            validateIp: true,
            allowedIps: ["127.0.0.1"],
            createdAt: "2023-11-01T08:20:30.000Z"
        },
        {
            id: "91d00182-ca38-4b72-bd8d-598daab20aa8",
            key: "3a6a7be0a41cb3e450c1c7a6f50bf03dba532d4adf1cfc1bf0e2241f795d",
            active: true,
            validateIp: true,
            allowedIps: ["127.0.0.1"],
            createdAt: "2023-11-01T08:20:30.000Z"
        },
        {
            id: "91d00182-ca38-4b72-bd8d-598daab20aa8",
            key: "3a6a7be0a41cb3e450c1c7a6f50bf03dba532d4adf1cfc1bf0e2241f795d",
            active: true,
            validateIp: true,
            allowedIps: ["127.0.0.1"],
            createdAt: "2023-11-01T08:20:30.000Z"
        }
    ]
};
const AccountApiList: React.FC<IComponent> = ({ className }) => {
    const { apiKeys } = useSelector((state: IRootState) => state.userApiKeys);
    const { data = [] } = apiKeys || {};
    console.log(data);
    const router = useRouter();
    const { pairs = perPages[2], page = 1 } = router.query;
    const dispatch = useDispatch();

    const hardSorting = useState<{ key: string; sort: string }>({ key: "createdAt", sort: "desc" });
    const [perPage, setPerPage] = useState(perPages.findIndex((x) => x === Number(pairs)) !== -1 ? Number(pairs) : defaultPerPage);
    const [currentPage, setCurrentPage] = useState(Number(page) || 1);

    const classes = classNames([styles["dex-pairs"], "list", className]);

    if (!data?.length) return <></>;

    const handleChangePage = (page) => setCurrentPage(page);

    const handleChangePerPage = (perPage) => setPerPage(perPage);

    const handleChangeStatus = async (id, row) => {
        await authMiddleware.updateApiMiddleware(id, !row?.active, row?.validateIp, row?.allowedIps);
        dispatch(setApiKeys((await authMiddleware.getApiKeysMiddleware()) as IApiUserApiKeys));
        notify(dispatch, "Success!", "test");
    };
    const handleChangeIpValidation = async (id, row) => {
        await authMiddleware.updateApiMiddleware(id, row?.active, !row?.validateIp, row?.allowedIps);
        dispatch(setApiKeys((await authMiddleware.getApiKeysMiddleware()) as IApiUserApiKeys));
        notify(dispatch, "Success!", "test");
    };
    const handleDelete = async (id) => {
        await authMiddleware.deleteApiMiddleware(id);
        dispatch(setApiKeys((await authMiddleware.getApiKeysMiddleware()) as IApiUserApiKeys));
        notify(dispatch, "Success!", "test");
    };

    return (
        <div className={classes}>
            <Paginator key={`${data?.length ? JSON.stringify(data) : null}`} changePerPage page={currentPage} perPage={perPage} setPerPage={setPerPage} total={data?.length} onChangePage={handleChangePage} onChangePerPage={handleChangePerPage}>
                <ListHeader columnNames={columnNames(handleChangeStatus, handleChangeIpValidation, handleDelete)} columns={columns} data={data} hardSorting={hardSorting}>
                    <List adoptMobile slice={[(currentPage - 1) * perPage, currentPage * perPage]} />
                </ListHeader>
            </Paginator>
        </div>
    );
};

export default AccountApiList;
