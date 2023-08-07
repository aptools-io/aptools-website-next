// React
import React, { useState } from 'react';
import { ListHeader, List } from 'src/components/ui';
import useWindowSize from 'src/scripts/hooks/useWindowSize';
import media2 from './data/adaptiveTable';
import { Paginator } from 'src/components/ui';

const NftHolders: React.FC<IComponent> = ({}) => {
  const { width } = useWindowSize();
  const { columnNames = null, columns = null } = media2(width) || {};

  const [currentPage, setCurrrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  if (!width) return <></>;

  const data = [
    {
      rank: 1,
      owner:
        '0xafb6e14fe47d850fd0a7395bcfb997ffacf4715e0f895cc162c218e4a7564bc6',
      amount: '2,145 APT',
      percentage: '0.93%',
    },
    {
      rank: 1,
      owner:
        '0xafb6e14fe47d850fd0a7395bcfb997ffacf4715e0f895cc162c218e4a7564bc6',
      amount: '2,145 APT',
      percentage: '0.93%',
    },
    {
      rank: 1,
      owner:
        '0xafb6e14fe47d850fd0a7395bcfb997ffacf4715e0f895cc162c218e4a7564bc6',
      amount: '2,145 APT',
      percentage: '0.93%',
    },
    {
      rank: 1,
      owner:
        '0xafb6e14fe47d850fd0a7395bcfb997ffacf4715e0f895cc162c218e4a7564bc6',
      amount: '2,145 APT',
      percentage: '0.93%',
    },
    {
      rank: 1,
      owner:
        '0xafb6e14fe47d850fd0a7395bcfb997ffacf4715e0f895cc162c218e4a7564bc6',
      amount: '2,145 APT',
      percentage: '0.93%',
    },
    {
      rank: 1,
      owner:
        '0xafb6e14fe47d850fd0a7395bcfb997ffacf4715e0f895cc162c218e4a7564bc6',
      amount: '2,145 APT',
      percentage: '0.93%',
    },
    {
      rank: 1,
      owner:
        '0xafb6e14fe47d850fd0a7395bcfb997ffacf4715e0f895cc162c218e4a7564bc6',
      amount: '2,145 APT',
      percentage: '0.93%',
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
      <ListHeader columnNames={columnNames} columns={columns} data={data}>
        <List />
      </ListHeader>
    </Paginator>
  );
};

export default NftHolders;
