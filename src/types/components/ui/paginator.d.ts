interface IPaginatorProps extends IComponent {
    page: number;
    perPage: number;
    perPageKey?: string;
    pageKey?: string;
    changePerPage?: boolean;
    total: number;
    shift?: number;
    onChangePage: (page: number) => any;
    setPerPage: React.Dispatch<React.SetStateAction<number>>;
}
