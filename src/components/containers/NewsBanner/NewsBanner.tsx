// React
import React, { useState } from "react";

// Swiper / Components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { Button, Img, Plug } from "src/components/ui";

// Styles
import classNames from "classnames";

// Static
import NewsBannerLogo from "public/static/images/svg/news_banner_logo.svg";
import NewsImage1 from "public/static/images/png/news_1.png";
import NewsImage2 from "public/static/images/png/news_2.png";
import { Calendar } from "src/components/svg";
import styles from "./NewsBanner.module.scss";

const NewsBanner: React.FC<{ data?: IApiEventsSlide[]; hideBackground?: boolean } & IComponent> = ({ hideBackground = false, data, className }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const classes = classNames([styles["news-banner"], { [styles["no-data"]]: !(data?.length > 0) }, className]);

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
                {data?.length > 0 ? (
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
                ) : (
                    <Plug noData />
                )}
            </div>
            <div className={styles["news-banner__dots"]} />
        </div>
    );
};

export default NewsBanner;
