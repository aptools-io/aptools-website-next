interface IButtonProps extends IComponent {
    href?: string;
    after?, before?: "back" | "up" | "down";
    invert?: boolean;
}
