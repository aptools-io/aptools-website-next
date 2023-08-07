import { formatNumber, setSign } from 'src/scripts/util/numbers';
import { shortenHashString } from 'src/scripts/util/strings';

// Convert
const columnNamesDesktop = [
  {
    key: 'rank',
    value: 'Rank',
  },
  {
    key: 'owner',
    value: 'Owner',
    // formatter: (v) => `${shortenHashString(v, mediaData.format)}`,
    formatter: (v) => `${shortenHashString(v, [10, 10])}`,
    link: '/accounts',
    underline: true,
  },
  {
    key: 'amount',
    value: 'Amount',
    right: true,
    // under: [
    //   {
    //     key: 'percentage',
    //     value: '%',
    //     right: true,
    //     formatter: (v) => `${v}`,
    //     colorize: true,
    //   },
    // ],
  },
  {
    key: 'percentage',
    value: 'Percentage',
    right: true,
  },
];

// Columns
const columnsDesktop = ['6.9%', '65.9%', '13.6%', '13.6%'];

export { columnNamesDesktop, columnsDesktop };
