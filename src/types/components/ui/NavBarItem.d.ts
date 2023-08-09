interface INavBarMenuItemProps extends IComponent {
    data: INavBarMenuItem;
    expanded: boolean;
}
interface INavBarMenuItem {
    title?, link: string;
    target?: string;
    svg: JSX.Element;
}