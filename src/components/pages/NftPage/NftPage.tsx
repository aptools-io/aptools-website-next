// React
import React, { useState } from 'react';
import styles from './NftPage.module.scss';
import { Grid, GridWrapper, Topper } from 'src/components/general';
import NftElement from '../../ui/NftElement/NftElement';
import { Paginator } from 'src/components/ui';
import media from './data/adaptive';
import useWindowSize from 'src/scripts/hooks/useWindowSize';

const NftPage: React.FC = () => {
  const { width } = useWindowSize();
  const mediaData = media(width);

  const [currentPage, setCurrrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  const nftList = [
    {
      id: 1,
      image: 'https://picsum.photos/200/300',
      title: 'LFB',
      floor: '2.30 APT',
      transfers: '1,323,389',
    },
    {
      id: 2,
      image: 'https://picsum.photos/200/300',
      title: 'Galxe OAT',
      floor: '2.30 APT',
      transfers: '1,323,389',
    },
    {
      id: 3,
      image: 'https://picsum.photos/200/300',
      title: 'Souffl3 BakeOff - Egg',
      floor: '2.30 APT',
      transfers: '1,323,389',
    },
    {
      id: 4,
      image: 'https://picsum.photos/200/300',
      title: 'Bake Off Mystery Box - BOMB',
      floor: '2.30 APT',
      transfers: '1,323,389',
    },
    {
      id: 5,
      image: 'https://picsum.photos/200/300',
      title: 'Aptos Names V1',
      floor: '2.30 APT',
      transfers: '1,323,389',
    },
    {
      id: 6,
      image: 'https://picsum.photos/200/300',
      title: 'Souffl3 BakeOff - Milk',
      floor: '2.30 APT',
      transfers: '1,323,389',
    },
    {
      id: 7,
      image: 'https://picsum.photos/200/300',
      title: 'Souffl3 BakeOff - Sugar',
      floor: '2.30 APT',
      transfers: '1,323,389',
    },
    {
      id: 8,
      image: 'https://picsum.photos/200/300',
      title: 'Souffl3 BakeOff - Flour',
      floor: '2.30 APT',
      transfers: '1,323,389',
    },
    {
      id: 9,
      image: 'https://picsum.photos/200/300',
      title: 'Souffl3 BakeOff - Blueberry',
      floor: '2.30 APT',
      transfers: '1,323,389',
    },
    {
      id: 10,
      image: 'https://picsum.photos/200/300',
      title: 'METAPIXEL Early Adopter NFT',
      floor: '2.30 APT',
      transfers: '1,323,389',
    },
  ];

  return (
    <>
      <Topper backlink={'/'} />
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
        <Grid columns={mediaData.moneyFlowWrapper} gap={0}>
          <GridWrapper gridWidth={1}>
            {nftList
              .filter((item, index) => index % 2 !== 1)
              .map((nft) => {
                const { id, image, title, floor, transfers } = nft;
                return (
                  <div className={styles.nft__block}>
                    <NftElement
                      key={id}
                      id={id}
                      nftImage={image}
                      title={title}
                      floor={floor}
                      transfers={transfers}
                    />
                  </div>
                );
              })}
          </GridWrapper>
          <GridWrapper gridWidth={1}>
            {nftList
              .filter((item, index) => index % 2 === 1)
              .map((nft) => {
                const { id, image, title, floor, transfers } = nft;
                return (
                  <div className={styles.nft__block}>
                    <NftElement
                      key={id}
                      id={id}
                      nftImage={image}
                      title={title}
                      floor={floor}
                      transfers={transfers}
                    />
                  </div>
                );
              })}
          </GridWrapper>
        </Grid>
      </Paginator>
    </>
  );
};

export default NftPage;
