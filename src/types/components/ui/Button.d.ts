interface IButtonProps extends IComponent {
    type?: "button" | "submit" | "reset";
    href?: string;
    after?: "back" | "up" | "down" | "forward" | "plus" | "wallet" | "logout";
    before?: "back" | "up" | "down" | "forward" | "plus" | "wallet" | "logout";
    invert?: boolean;
    fill?: boolean;
    disabled?: boolean;
    onClick?: () => void;
}
