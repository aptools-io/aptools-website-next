// React
import React, { Children, useRef, useState, cloneElement, useEffect } from "react";

// Styles
import classNames from "classnames";
import { ArrowLeft } from "src/components/svg";
import styles from "./Select.module.scss";

// Util



const Select: React.FC<ISelectProps> = ({ onChange, value = 0, title, className, children }) => {
    const selectRef = useRef(null);
    const optionsRef = useRef(null);
    const childs = Children.toArray(children) as React.ReactElement<any, string | React.JSXElementConstructor<any>>[];
    const [show, setShow] = useState(false);
    const [fromBottom, setFromBottom] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (selectRef.current && !selectRef.current.contains(event.target)) {
                setShow(false);   
            }
        }
        const handleFromBottom = () => {
            if(!selectRef.current || !optionsRef.current) return;
            const selectRect = selectRef.current.getBoundingClientRect();
            const optionsRect = optionsRef.current.getBoundingClientRect();
            setFromBottom(optionsRect.height + selectRect.height + selectRect.y >= window.innerHeight);
        };
        

        handleFromBottom();

        window.addEventListener("resize", handleFromBottom);
        window.addEventListener("scroll", handleFromBottom);
        window.addEventListener("click", handleClickOutside);
        return () => {
            window.removeEventListener("resize", handleFromBottom);
            window.removeEventListener("scroll", handleFromBottom);
            window.removeEventListener("click", handleClickOutside);
        } 
    }, []);

    const classes = classNames([
        styles["select"], 
        { [styles["from-bottom"]]: fromBottom },
        { [styles["show"]]: show,
        className
    }]);

    const renderOptions = (child, index) => {
        const id = index.toString();
        const onClick = () => onChange(id);

        const optionProps = {
            onClick,
            className: classNames([
                styles["select__option"], 
                { [styles["active"]]: value === id 
            }])
        };

        return <div key={index} {...optionProps}>{cloneElement(child)}</div>;
    };

    return (
        <div ref={selectRef} className={classes}>
            {title && <strong>{title}</strong>}
            <button type={"button"} onClick={() => setShow(!show)} className={styles["select__wrapper"]}>
                <div className={styles["select__input"]}>
                    <span>{childs[value]?.props?.children}</span>
                    <ArrowLeft />
                </div>
                <div ref={optionsRef} className={styles["select__options"]}>
                    {!fromBottom ? childs.map(renderOptions) : childs.map(renderOptions).reverse()}
                </div>
            </button>
        </div>
    );
};

export default Select;
