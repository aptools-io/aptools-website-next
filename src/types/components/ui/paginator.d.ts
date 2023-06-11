interface IPaginatorProps extends IComponent {
    page: number;
    perPage: number;
    total: number;
    shift?: number;
    onChangePage: (page: number) => any;
}
