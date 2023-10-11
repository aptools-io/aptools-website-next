interface IButtonProps extends IComponent {
    href?: string;
    after?;
    before?: "back" | "up" | "down" | "forward" | "plus" | "wallet";
    invert?: boolean;
    fill?: boolean;
    disabled?: boolean;
    onClick?: () => void;
}
