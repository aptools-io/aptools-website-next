// React
import React, { useState } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "src/scripts/redux/store";

// Styles
import classNames from "classnames";
import { ActiveLink, Button, CodeArea, CopyText } from "src/components/ui";
import { ArrowMore } from "src/components/svg";
import { Grid, GridWrapper } from "src/components/general";
import useWindowSize from "src/scripts/hooks/useWindowSize";
import styles from "./TransactionCodeList.module.scss";
import media from "./data/adaptive";



const TransactionCodeList: React.FC<{ getElements?: (transaction: IApiTransactionInfo) => ITransactionCodeElement[][] | [] } & IComponent> = ({
    getElements = null,
    className 
}) => {
    /* const dispatch = useDispatch(); */
    const { transaction } = useSelector((state: IRootState) => state.statsTransactions);
    const elements = getElements(transaction);
    const [opens, setOpens] = useState(new Array(elements.length).fill(false));

    const { width } = useWindowSize();
    const mediaData = media(width);

    const classes = classNames([
        styles["transaction-code-list"],
        className
    ]);

    if(!width) return <></>;

    const renderItem = (item: ITransactionCodeElement, index: number) => {
        let value = item?.value;
        if(item?.hash) value = mediaData.anyHash(value); 
        return (
            <li key={index} className={classNames([
                styles["transaction-code-list__item-info"],
                { [styles.column]: item?.code }
            ])}>
                {item?.title && <span className={styles.title}>{item?.title}</span>}
                {item?.value && <span className={styles.value}>
                    {item?.hash ?
                        <><ActiveLink href={item?.value}><a>{value}</a></ActiveLink> <CopyText text={item?.value} /></> :
                        value
                    }
                </span>}
                {item?.code && <div className={styles.code}><CodeArea noPaddings data={item?.code} /></div>}
            </li>
        );
    };
    
    const handleOpenCodeWrapper = (index: number) => {
        const temp = [...opens];
        temp[index] = !temp[index];
        setOpens(temp);
    };

    const handleInnerClick = (e) => { e.stopPropagation(); };

    const renderCodeWrapper = (item: ITransactionCodeElement[], index: number) => {
        return (
            <li key={index} onClick={() => handleOpenCodeWrapper(index)} className={
                classNames([
                    styles["transaction-code-list__item"],
                    { [styles.open]: opens[index] }
                ])}>
                <div className={styles["transaction-code-list__item-top"]}>
                    {renderItem(item[0], 0)}
                    <ArrowMore />
                </div>
                <div 
                    className={styles["transaction-code-list__item-infos-wrapper"]}
                    onClick={handleInnerClick}
                >
                    <ul className={styles["transaction-code-list__item-infos"]}>{item.map(renderItem).slice(1)}</ul>
                </div>
            </li>
        );
    };

    const handleSetOpens = (expand: boolean) => setOpens(e => e.map(e => !expand));

    const setDisabled = (allExpanded: boolean) => opens.every(e => e === allExpanded);

    return (
        <Grid>
            <GridWrapper gridWidth={mediaData.transactionCodeWrapper}>
                <div className={classes}>
                    <div className={styles["transaction-code-list__buttons"]}>
                        <Button invert disabled={setDisabled(true)} onClick={() => handleSetOpens(false)}>Expand All</Button>
                        <Button invert disabled={setDisabled(false)} onClick={() => handleSetOpens(true)}>Collapse All</Button>
                    </div>
                    <ul className={styles["transaction-code-list__items"]}>
                        {elements.map(renderCodeWrapper)}
                    </ul>
                </div>
            </GridWrapper>
        </Grid>
    );
};

export default TransactionCodeList;
