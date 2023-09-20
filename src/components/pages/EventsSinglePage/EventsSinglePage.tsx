// React
import moment from "moment";
import React, { useEffect, useRef, useState } from "react";

import { Grid, GridWrapper, Topper } from "src/components/general";
import styles from "./EventsSinglePage.module.scss";

const EventsSinglePage: React.FC = () => {
    return (
        <>
            <Grid columns={10}>
                <GridWrapper grid={{ start: 2, end: 9 }}>
                    <Topper backlink={"/events"} />
                </GridWrapper>
            </Grid>
        </>
    );
};

export default EventsSinglePage;
