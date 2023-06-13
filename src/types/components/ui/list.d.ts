interface IListHeaderProps extends IComponent {
    columnNames?: IColumnName[];
    columns?: string[];
    data?: unknown[];
}

interface IListProps extends IListHeaderProps {
    adoptMobile?: boolean
}

interface IColumnName {
    underline?: boolean;
    headRemove?: boolean;
    key: string;
    value: string;
    collapser?: boolean;
    right?: boolean;
    defaultSort?: boolean;
    defaultSortType?: string;
    ignoreCombined?: boolean;
    headHideMobile?: boolean;
    link?: string;
    coinImage?: string;
    description?: string;
    copy?: boolean;
    main?: boolean;
    under?: IColumnName[];
    valueGridReplace?: IColumnName[];
    formatter?: (v: any) => string;
    replacedFormatter?: (v: any) => string;
    hideMobile?: boolean;
    mainMobile?: boolean;
}
