interface ITabsProps extends IComponent {
    data?: object;
    dataArray?: ITab[];
    itemsCount?: boolean;
    defaultEntry?: object;
}

interface ITab {
    title?: string;
    id?: number;
    action?: (any, id: number) => void;
    data?: object;
}