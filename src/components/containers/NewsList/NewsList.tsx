// React
import React from "react";

// Styles
import classNames from "classnames";
import styles from "./NewsList.module.scss";

// Components
import { addZero } from "src/scripts/util/timeConvert";
import { ActiveLink, Img } from "src/components/ui";

const NewsList: React.FC<{ data?: IApiNews } & IComponent> = ({
    className,
    data = null
}) => {
    /* const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis); */
    const classes = classNames([
        styles["news-list"],
        className
    ]);

    if(!data) return <></>
    
    const renderNewsElements = (item: IApiNewsContent, index: number) => {
        const { id, title, description, imageLink, insertedAt, category } = item;
        const date = `${addZero(insertedAt[2])}.${addZero(insertedAt[1])}.${insertedAt[0]}`;
        const categoryTitle = category?.categoryTitle;
  
        return (
            <li key={index}>
                <ActiveLink href={`/news/${id}`}>
                    <a className={styles["news-list__item"]}>
                        <div className={styles["news-list__item-info"]}>
                            {title && <strong className={styles["title"]}>{title}</strong>}
                            {/* {description && <span className={styles["description"]}>{description}</span>} */}
                            <span className={styles["description"]}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed dui posuere, luctus ante id, mollis lorem. Sed ipsum erat, pulvinar sit amet aliquam sed, iaculis in risus. Sed ex odio, porttitor sed diam at, malesuada pretium sem. Sed ac nisi semper, ullamcorper metus id, posuere nulla. Pellentesque sed laoreet sem. Cras nisl lectus, blandit eu auctor non, imperdiet sed massa. Integer ac sapien feugiat, volutpat risus sit amet, maximus justo. Aliquam ut nisl euismod, congue quam id, lobortis mauris. Aenean sed venenatis erat. Sed egestas tempus est at semper. Praesent in rutrum dui
                            </span>
                            <div className={styles["news-list__item-bottom"]}>
                                {insertedAt && <span className={styles["date"]}>{date}</span>}
                                <i/>
                                {categoryTitle && <span className={classNames([
                                    styles["category"],
                                    { [styles["market"]]: categoryTitle === "Market" },
                                    { [styles["technology"]]: categoryTitle === "Technology" },
                                    { [styles["update"]]: categoryTitle === "Update" },
                                    { [styles["regulation"]]: categoryTitle === "Regulation" },
                                    { [styles["security"]]: categoryTitle === "Security" },
                                ])}>{categoryTitle}</span>}
                            </div>
                        </div>
                        <div className={styles["news-list__item-image"]}>
                            {imageLink &&  <Img src={imageLink} alt={title} />}
                        </div>
                    </a>
                </ActiveLink>
            </li>
        )
    }

    return (
        <div className={classes}>
            {data?.content && <ul className={styles["news-list__items"]}>
                {data.content?.map(renderNewsElements)}
            </ul>}
        </div>
    );
};

export default NewsList;
