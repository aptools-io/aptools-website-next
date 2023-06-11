interface ITitleSwitcherProps extends IComponent {
    title?: string;
    data?: ITitleSwitcherData[];
    settedData?: ITitleSwitcherData;
    setData?: React.Dispatch<React.SetStateAction<ITitleSwitcherData>>
}

interface ITitleSwitcherData {
    key: string;
    value: string;
}
