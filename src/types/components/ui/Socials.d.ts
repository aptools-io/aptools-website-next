interface ISocialsProps extends IComponent {
    title?: boolean;
    data?: INavBarMenuItem[];
}
interface ISocialsItem {
    link: string;
    svg: JSX.Element;
}