interface IMonthPickerProps extends IComponent {
    onChange: (any) => void;
    value: {
        month: {
            from: {
                month: number;
                year: number;
            };
            to: {
                month: number;
                year: number;
            };
        };
        selectedYear: number;
        selecting: boolean;
    };
    setShow?: React.Dispatch<React.SetStateAction<boolean>>;
}
