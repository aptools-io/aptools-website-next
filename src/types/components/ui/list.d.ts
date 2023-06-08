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
    ignoreCombined?: boolean;
    link?: string;
}
