interface IMonthPickerProps extends IComponent {
    onChange: (any) => void;
    value: {
        date: {
            from: {
                month: number;
                year: number;
            };
            to: {
                month: number;
                year: number;
            };
            start: string;
            end: string;
            startShort: string;
            endShort: string;
        };
        selectedYear: number;
        selecting: boolean;
    };
    setShow?: React.Dispatch<React.SetStateAction<boolean>>;
}
