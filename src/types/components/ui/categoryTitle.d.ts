interface ICategoryTitleProps extends IComponent {
    title?: string;
    greyLine?: boolean;
    collapse?: boolean;
    setCollapse?: React.Dispatch<React.SetStateAction<boolean>>;
}
