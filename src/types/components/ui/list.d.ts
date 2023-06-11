interface IListHeaderProps extends IComponent {
    columnNames?: IColumnName[];
    columns?: string[];
    data?: unknown[];
}

interface IListProps extends IListHeaderProps {

}

interface IColumnName {
    key: string;
    value: string;
    right?: boolean;
    defaultSort?: boolean;
    defaultSortType?: string;
    ignoreCombined?: boolean;
    link?: string;
    coinImage?: string;
    description?: string;
    copy?: boolean;
}
