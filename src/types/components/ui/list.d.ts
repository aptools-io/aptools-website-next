interface IListHeaderProps extends IComponent {
    columnNames?: IColumnName[];
    columns?: string[];
    hardSorting?: any;
    data?: unknown[];
}

interface IListProps extends IListHeaderProps {
    adoptMobile?: boolean;
    row?: combined;
    rowIndex?: number;
    column?: IColumnName;
    loadingCount?: number;
    columnIndex?: number;
    under?: JSX.Element[]; 
    slice?: [start: number, end: number]
    valueGridReplace?: JSX.Element[];
    loadingComponent?: JSX.Element;
    inner?: boolean;
    handleCollapse?: () => void;
}

interface IRowProps {
    combined?: IRowProps[];
    [key: string]: string & number & IRowProps;
}

interface IColumnName {
    valueGridReplace?: IColumnName[];
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
    copy?: string;
    main?: boolean;
    under?: IColumnName[];
    formatter?: (v: any) => string;
    replacedFormatter?: (v: any) => string;
    hideMobile?: boolean;
    mainMobile?: boolean;
    fontSize?: number;
    span?: number;
    bold?: boolean;
    elementRemove?: boolean;
    replacedKeyMobile?: string;
    symbol?: string;
    colorize?: boolean;
}
