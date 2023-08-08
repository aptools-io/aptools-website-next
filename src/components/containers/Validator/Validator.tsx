// React
import React from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// Components
import { AccountsList } from "src/components/lists";
import { Tabs } from "src/components/ui";

// Hooks
import useWindowSize from "src/scripts/hooks/useWindowSize";

// Styles
import classNames from "classnames";
import styles from "./Validator.module.scss";

// Data
import categories from "./data/categories";




const Validator: React.FC<IComponent> = ({
    className 
}) => {
    const dispatch = useDispatch();
    const { validator } = useSelector((state: IRootState) => state.validators);

    const classes = classNames([
        styles.validator,
        className
    ]);


    return (
        <div className={classes}>
            <Tabs dataArray={categories(dispatch, validator)} itemsCount={false}>
                <div></div>
            </Tabs>
        </div>
    );
};

export default Validator;
