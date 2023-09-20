interface IButtonProps extends IComponent {
    href?: string;
    after?;
    before?: "back" | "up" | "down" | "forward" | "plus";
    invert?: boolean;
    fill?: boolean;
    disabled?: boolean;
    onClick?: () => void;
}
