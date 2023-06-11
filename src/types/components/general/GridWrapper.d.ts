interface IGridWrapperProps extends IComponent {
    grid?: IGrid;
    gridWidth?: number;
    children: React.ReactNode;
}

interface IGrid {
    start: number,
    end?: number
}