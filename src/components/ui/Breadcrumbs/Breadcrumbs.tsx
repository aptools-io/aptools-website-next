// React
import React from "react";

// Next
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

// Styles
import styles from "./Breadcrumbs.module.scss";

const Breadcrumbs: React.FC<IBreadcrumbsProps> = ({customTitle, customLink}) => {
    const router = useRouter();
    const { t } = useTranslation("pages");

    const getPathsArray = React.useMemo(() => {
        const pathArray = router.pathname.split("/");
        const dataArray: IBreadcrumbsItem[] = [];
       
        pathArray.forEach((element, index) => {
            let url = "";
            for (let i = index; i > 0; i--) {
                url += `/${pathArray[i]}`;
            }
            if(customLink && customLink[index]) url = customLink[index];
            // url = customLinks ? String() : url;
            const title = element || "home";
            dataArray.push({ "title": title, "url": url || "/" });
        });
        
        
        if(customTitle) 
            dataArray[dataArray.length - 1].title = customTitle; 
        return dataArray;
    }, [router]);


    const renderBreadcrumb = (item, index) => {
        if (index !== getPathsArray.length - 1) {
            return (
                <React.Fragment key={index}>
                    <Link href={item.url}>
                        <a>{t(item.title)}</a>
                    </Link>
                    <i> / </i>
                </React.Fragment>
            );
        }
        return <span key={index}>{t(item.title)}</span>;
    };

    return (
        <div className={styles.breadcrumbs}>
            {Array.isArray(getPathsArray) && getPathsArray?.map(renderBreadcrumb)}
        </div>
    );
};

export default Breadcrumbs;
