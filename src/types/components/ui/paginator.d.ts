interface IPaginatorProps extends IComponent {
    page: number;
    perPage: number;
    perPageKey?: string;
    pageKey?: string;
    changePerPage?: boolean;
    total: number;
    shift?: number;
    paginatorName?: string;
    noSaveStates?: boolean;
    checkState?: boolean;
    onChangePage?: (page: number, action?: () => any) => any;
    onChangePerPage?: (page: number, action?: () => any) => any;
    setPerPage?: React.Dispatch<React.SetStateAction<number>>;
    customPaginatorWrapper?: React.MutableRefObject<any>;
}
