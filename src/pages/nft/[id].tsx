// React
import React, { useEffect } from 'react';

// Redux
import { useDispatch } from 'react-redux';
import { setHeaders } from 'src/scripts/redux/slices/headersSlice';
import { setPageTitle } from 'src/scripts/redux/slices/pageTitleSlice';

// Components
import NftCurrent from 'src/components/pages/NftCurrent/NftCurrent';

const NFTSP = (data: IApiProps) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setHeaders(data.headers) || null);
    dispatch(setPageTitle('NFT'));
  }, [data, dispatch]);

  return <NftCurrent />;
};
export default NFTSP;

export async function getServerSideProps(context) {
  const { req } = context;

  return {
    props: {
      headers: req.headers,
    },
  };
}
