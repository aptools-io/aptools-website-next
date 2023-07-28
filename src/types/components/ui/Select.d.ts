interface ISelectProps extends IComponent {
    title?: string;
    customSelectWrapper?: React.MutableRefObject<any>;
    onChange: (any) => void;
    value: number;
}
