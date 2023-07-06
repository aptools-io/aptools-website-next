// React
import React, { useRef, useState } from "react";

// Swiper / Components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { ArrowLeftBig } from "src/components/svg";
import { ActiveLink, Img } from "src/components/ui";


// Styles
import classNames from "classnames";
import styles from "./TrendsList.module.scss";

const dummyData = [
    {
        id: 1,
        title: "Crypto 101: Unlocking the Potential of Digital Currency",
        date: "03.03.2023",
        category: "Technology",
        imageLink: "/"
    },
    {
        id: 1,
        title: "Crypto 101: Unlocking the Potential of Digital Currency",
        date: "03.03.2023",
        category: "Security",
        imageLink: "/"
    },
    {
        id: 1,
        title: "Crypto 101: Unlocking the Potential of Digital Currency",
        date: "03.03.2023",
        category: "Security",
        imageLink: "/"
    },
    {
        id: 1,
        title: "Crypto 101: Unlocking the Potential of Digital Currency",
        date: "03.03.2023",
        category: "Security",
        imageLink: "/"
    },
    {
        id: 1,
        title: "Crypto 101: Unlocking the Potential of Digital Currency",
        date: "03.03.2023",
        category: "Security",
        imageLink: "/"
    },
];

const TrendsList: React.FC<{ vertical?: boolean } & IComponent> = ({
    vertical = false,
    className 
}) => {

    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
    const [swiper, setSwiper] = useState(null);

    const classes = classNames([
        styles["trends-list"],
        className
    ]);

    const renderTrendItem = (item, index: number) => {
        const { id, title, date, category, imageLink } = item;
        return (
            <SwiperSlide key={index}>
                <ActiveLink href={`/updates/${id}`}>
                    <a className={styles["trends-list__item"]}>
                        <div  className={styles["trends-list__item-info"]}>
                            {title && <strong className={styles["title"]}>{title}</strong>}
                            <div className={styles["trends-list__item-bottom"]}>
                                {date && <span className={styles["date"]}>{date}</span>}
                                <i/>
                                {category && <span className={classNames([
                                    styles["category"],
                                    { [styles["market"]]: category === "Market" },
                                    { [styles["technology"]]: category === "Technology" },
                                    { [styles["update"]]: category === "Update" },
                                    { [styles["regulation"]]: category === "Regulation" },
                                    { [styles["security"]]: category === "Security" },
                                ])}>{category}</span>}
                            </div>
                        </div>
                        <div className={styles["trends-list__item-image"]}>
                            {imageLink && <Img src={imageLink} alt={title} />}
                        </div>
                    </a>
                </ActiveLink>
            </SwiperSlide>
        );
    };

    return (
        <div className={classes}>
            <div className={styles["trends-list__nav--button"]} onClick={() => swiper.slidePrev()} ref={navigationPrevRef}>
                <ArrowLeftBig />  
            </div>
            <div className={styles["trends-list__inner"]}>
                <>
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            prevEl: navigationPrevRef.current,
                            nextEl: navigationNextRef.current,
                        }}
                        slidesPerView={3}
                        
                        onBeforeInit={(swiper) =>{
                            swiper.params.navigation["disabledClass"] = styles["trends-list__nav--disabled"];
                            swiper.params.navigation["lockClass"] = styles["trends-list__nav--lock"];
                        }}
                        onInit={(swiper) => {
                            setSwiper(swiper);
                            swiper.wrapperEl.classList.add(styles["trends-list__items"]);
                        }}
                    >
                        {dummyData.map(renderTrendItem)}
                    </Swiper>
                </>
            </div>
            <div className={styles["trends-list__nav--button"]} onClick={() => swiper.slideNext()} ref={navigationNextRef}>
                <ArrowLeftBig />
            </div>
        </div>
    );
};

export default TrendsList;
