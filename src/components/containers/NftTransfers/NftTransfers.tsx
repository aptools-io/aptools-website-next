// React
import React, { useState } from 'react';
import { ListHeader, List } from 'src/components/ui';
import { shortenHashString } from 'src/scripts/util/strings';
import useWindowSize from 'src/scripts/hooks/useWindowSize';
import media from './data/adaptive';
import { Paginator } from 'src/components/ui';

const NftTransfers: React.FC<IComponent> = ({}) => {
  const { width } = useWindowSize();
  const mediaData = media(width);

  const [currentPage, setCurrrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  if (!width) return <></>;

  const data = [
    {
      version: 127761583,
      block: 127761583,
      age: '9m ago',
      account:
        '0xafb6e14fe47d850fd0a7395bcfb997ffacf4715e0f895cc162c218e4a7564bc6',
      active: '0x3::token::DepositEvent',
      token: 'agent0006.agent006.apt',
      property: '1',
      amount: 'Amount',
    },
    {
      version: 127761583,
      block: 127761583,
      age: '9m ago',
      account:
        '0xafb6e14fe47d850fd0a7395bcfb997ffacf4715e0f895cc162c218e4a7564bc6',
      active: '0x3::token::DepositEvent',
      token: 'agent0006.agent006.apt',
      property: '1',
      amount: 'Amount',
    },
    {
      version: 127761583,
      block: 127761583,
      age: '9m ago',
      account:
        '0xafb6e14fe47d850fd0a7395bcfb997ffacf4715e0f895cc162c218e4a7564bc6',
      active: '0x3::token::DepositEvent',
      token: 'agent0006.agent006.apt',
      property: '1',
      amount: 'Amount',
    },
    {
      version: 127761583,
      block: 127761583,
      age: '9m ago',
      account:
        '0xafb6e14fe47d850fd0a7395bcfb997ffacf4715e0f895cc162c218e4a7564bc6',
      active: '0x3::token::DepositEvent',
      token: 'agent0006.agent006.apt',
      property: '1',
      amount: 'Amount',
    },
    {
      version: 127761583,
      block: 127761583,
      age: '9m ago',
      account:
        '0xafb6e14fe47d850fd0a7395bcfb997ffacf4715e0f895cc162c218e4a7564bc6',
      active: '0x3::token::DepositEvent',
      token: 'agent0006.agent006.apt',
      property: '1',
      amount: 'Amount',
    },
    {
      version: 127761583,
      block: 127761583,
      age: '9m ago',
      account:
        '0xafb6e14fe47d850fd0a7395bcfb997ffacf4715e0f895cc162c218e4a7564bc6',
      active: '0x3::token::DepositEvent',
      token: 'agent0006.agent006.apt',
      property: '1',
      amount: 'Amount',
    },
  ];

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
      <ListHeader
        columnNames={[
          {
            key: 'version',
            value: 'version',
            headHideMobile: true,
          },
          {
            key: 'block',
            value: 'Block',
          },
          {
            key: 'age',
            value: 'Age',
          },
          {
            key: 'account',
            value: 'account',
            formatter: (v) => `${shortenHashString(v, mediaData.format)}`,
            link: '/accounts',
            headHideMobile: true,
            underline: true,
          },
          {
            key: 'active',
            value: 'active type',
            headHideMobile: true,
          },
          {
            key: 'token',
            value: 'token name',
            headHideMobile: true,
          },
          {
            key: 'property',
            value: 'property ver.',
            right: true,
            headHideMobile: true,
          },
          {
            key: 'amount',
            value: 'Amount',
            right: true,
          },
        ]}
        columns={['6%', '6%', '8%', '24%', '16%', '24%', '10%', '6%']}
        data={data}
      >
        <List adoptMobile />
      </ListHeader>
    </Paginator>
  );
};

export default NftTransfers;