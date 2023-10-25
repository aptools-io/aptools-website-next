interface IBreadcrumbsItem {
    title?: string;
    url?: string;
}

interface IBreadcrumbsProps extends IComponent {
    customTitle?: string;
    customLink?: Array<string>;
    noLink?: string[];
}
