// React
import React, { useState } from "react";

// Swiper / Components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { Button, Img } from "src/components/ui";

// Styles
import classNames from "classnames";

// Static
import NewsBannerLogo from "public/static/images/svg/news_banner_logo.svg";
import NewsImage1 from "public/static/images/png/news_1.png";
import NewsImage2 from "public/static/images/png/news_2.png";
import { Calendar } from "src/components/svg";
import styles from "./NewsBanner.module.scss";

const dummyData = [
    {
        id: 1,
        title: "Hello World",
        description: "Delve into the fascinating world of cryptocurrency and discover the revolutionary concept behind Aptos Coin and other digital currencies.",
        color: "blue",
        image: NewsImage1.src
    },
    {
        id: 1,
        title: "Hello World 2",
        description: "22 Delve into the fascinating world of cryptocurrency and discover the revolutionary concept behind Aptos Coin and other digital currencies.",
        color: "green",
        image: NewsImage2.src
    }
];

const NewsBanner: React.FC<{ data?: IApiEventsSlide[]; hideBackground?: boolean } & IComponent> = ({ hideBackground = false, data, className }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const classes = classNames([styles["news-banner"], className]);

    const renderBannerItems = (item: IApiEventsSlide, index) => {
        const { title, description, imageLink, eventLink, id, dateRange } = item || {};
        return (
            <SwiperSlide key={index}>
                <div className={classNames([styles["news-banner__item"], { [styles.active]: currentSlide === index }])}>
                    <div className={styles["news-banner__item-inner"]}>
                        <strong className={styles.title}>{title}</strong>
                        <span className={styles.description}>{description}</span>
                        {!eventLink && id && (
                            <Button fill href={`/events/${id}`}>
                                Read more
                            </Button>
                        )}
                        {eventLink && (
                            <Button fill href={eventLink}>
                                Go to event
                            </Button>
                        )}
                        {dateRange && (
                            <div className={styles.date}>
                                <Calendar />
                                <span>
                                    {dateRange?.startDate} {dateRange?.startTime}
                                </span>
                            </div>
                        )}
                    </div>
                    {!hideBackground && <img className={styles.logo} src={NewsBannerLogo.src} alt={"news banner logo"} />}
                    <Img src={`${process.env.BASE_URL}${imageLink}`} alt={title} hide />
                </div>
            </SwiperSlide>
        );
    };

    const pagination = {
        clickable: true,
        el: `.${styles["news-banner__dots"]}`,
        bulletActiveClass: styles.active,
        renderBullet(index, className) {
            return `<button class="${styles["news-banner__dot"]} ${className}"></button>`;
        }
    };

    return (
        <div className={classes}>
            <div
                className={classNames([
                    styles["news-banner__inner"]
                    /* styles[dummyData[currentSlide].color] */
                ])}>
                <Swiper
                    pagination={pagination}
                    modules={[Pagination]}
                    slidesPerView={1}
                    onInit={(swiper) => {
                        swiper.wrapperEl.classList.add(styles["news-banner__items"]);
                    }}
                    onSlideChange={(swiper) => {
                        setCurrentSlide(swiper.activeIndex);
                    }}>
                    {data?.map(renderBannerItems)}
                </Swiper>
            </div>
            <div className={styles["news-banner__dots"]} />
        </div>
    );
};

export default NewsBanner;
