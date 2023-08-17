interface ITabsProps extends IComponent {
    data?: object;
    dataArray?: ITab[];
    tabsName?: string;
    itemsCount?: boolean;
    defaultEntry?: object;
    queryTab?: boolean;
    onChangeTab?: (tabId: number) => void;
    hideSingle?: boolean;
}

interface ITab {
    title?: string;
    id?: number;
    component?: () => JSX.Element;
    action?: (
        dataDispatch: React.Dispatch<object>,
        loading: React.Dispatch<boolean>,
        id: number,
        queryId?: string,
        fullQuery?: any
    ) => void;
    data?: object;
}
