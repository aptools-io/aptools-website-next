interface ITabsProps extends IComponent {
    data?: object;
    dataArray?: ITab[];
    itemsCount?: boolean;
    defaultEntry?: object;
}

interface ITab {
    title?: string;
    id?: number;
    component?: () => JSX.Element,
    action?: (
        dataDispatch: React.Dispatch<object>, 
        loading: React.Dispatch<boolean>, 
        id: number
    ) => void, 
    data?: object;
}