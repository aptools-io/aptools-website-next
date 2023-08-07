// React
import React, { useState } from 'react';
import { Grid } from 'src/components/general';
import NftInventoryItem from 'src/components/ui/NftInventoryItem/NftInventoryItem';
import useWindowSize from 'src/scripts/hooks/useWindowSize';
import media from './data/adaptive';
import { Paginator } from 'src/components/ui';

const NftInventory: React.FC<IComponent> = ({}) => {
  const { width } = useWindowSize();
  const mediaData = media(width);

  const [currentPage, setCurrrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  return (
    <Paginator
      page={currentPage}
      perPage={perPage}
      changePerPage
      total={100}
      setPerPage={setPerPage}
      onChangePage={(page) => {
        setCurrrentPage(page);
      }}
      onChangePerPage={(perPage) => {
        setPerPage(perPage);
      }}
    >
      <Grid gap={16} columns={mediaData.moneyFlowWrapper}>
        {Array.from({ length: 16 }, (_, index) => index + 1).map((item) => {
          return <NftInventoryItem />;
        })}
      </Grid>
    </Paginator>
  );
};

export default NftInventory;
