// React
import React, {
    Children,
    useRef,
    useState,
    cloneElement,
    useEffect
} from "react";

// Styles
import classNames from "classnames";
import { ArrowLeft } from "src/components/svg";
import styles from "./Select.module.scss";

// Util

const Select: React.FC<ISelectProps> = ({
    customSelectWrapper,
    onChange,
    value = 0,
    label = null,
    title,
    className,
    children
}) => {
    const selectRef = useRef(null);
    const optionsRef = useRef(null);
    const childs = Children.toArray(children) as React.ReactElement<
        any,
        string | React.JSXElementConstructor<any>
    >[];
    const [show, setShow] = useState(false);
    const [fromBottom, setFromBottom] = useState(false);

    useEffect(() => {
        const selectWrapperElement = customSelectWrapper?.current || window;
        const customParams =
            customSelectWrapper?.current?.getBoundingClientRect();

        const customPlus =
            !Number.isNaN(customParams?.height) &&
            !Number.isNaN(customParams?.top)
                ? (customParams?.height || 0) + (customParams?.top || 0)
                : null;
        const wrapperHeight = customPlus || window?.innerHeight;
        const handleClickOutside = (event) => {
            if (selectRef.current && !selectRef.current.contains(event.target))
                setShow(false);
        };
        const handleFromBottom = () => {
            if (!selectRef.current || !optionsRef.current) return;
            const selectRect = selectRef.current.getBoundingClientRect();
            const optionsRect = optionsRef.current.getBoundingClientRect();
            setFromBottom(
                optionsRect.height + selectRect.height + selectRect.y >=
                    wrapperHeight
            );
        };

        handleFromBottom();

        selectWrapperElement.addEventListener("resize", handleFromBottom);
        selectWrapperElement.addEventListener("scroll", handleFromBottom);
        window.addEventListener("click", handleClickOutside);
        return () => {
            window.removeEventListener("resize", handleFromBottom);
            window.removeEventListener("scroll", handleFromBottom);
            window.removeEventListener("click", handleClickOutside);
        };
    }, [show]);

    const classes = classNames([
        styles.select,
        { [styles["from-bottom"]]: fromBottom },
        { [styles.show]: show, className }
    ]);

    const renderOptions = (
        child: React.ReactElement<
            any,
            string | React.JSXElementConstructor<any>
        >,
        index
    ) => {
        const id = index.toString();
        const childOnChange = child.props.onChange;
        const props = childOnChange ? { setShow } : {};
        const onClick = () => {
            if (childOnChange) return;
            setShow(!show);
            if (onChange) onChange(id);
        };

        const optionProps = {
            onClick,
            className: classNames([
                styles.select__option,
                { [styles.active]: value === id }
            ])
        };

        return (
            <div key={index} {...optionProps}>
                {cloneElement(child, props)}
            </div>
        );
    };

    return (
        <div ref={selectRef} className={classes}>
            {title && <strong>{title}</strong>}
            <div className={styles.select__wrapper}>
                <div
                    className={styles.select__input}
                    onClick={() => setShow(!show)}>
                    <span>{label || childs[value]?.props?.children}</span>
                    <ArrowLeft />
                </div>
                <div ref={optionsRef} className={styles.select__options}>
                    {!fromBottom
                        ? childs.map(renderOptions)
                        : childs.map(renderOptions).reverse()}
                </div>
            </div>
        </div>
    );
};

export default Select;
