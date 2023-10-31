interface IButtonProps extends IComponent {
    type?: "button" | "submit" | "reset";
    href?: string;
    after?;
    before?: "back" | "up" | "down" | "forward" | "plus" | "wallet";
    invert?: boolean;
    fill?: boolean;
    disabled?: boolean;
    onClick?: () => void;
}
