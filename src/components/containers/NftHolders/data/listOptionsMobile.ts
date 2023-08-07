import { shortenHashString } from 'src/scripts/util/strings';

// Convert
const columnNamesMobile = [
  {
    key: 'rank',
    value: '',
    mainMobile: false,
  },
  {
    key: 'owner',
    value: '',
    // Из-за того что это не хук, я не могу применить адаптив под media format, можно ли это как-то переделать/переписать?
    // formatter: (v) => `${shortenHashString(v, mediaData.format)}`,
    formatter: (v) => `${shortenHashString(v, [10, 10])}`,
    link: '/accounts',
    underline: true,
  },
  {
    key: 'amount',
    value: '',
    right: true,
    under: [
      {
        key: 'percentage',
        value: '%',
        right: true,
        formatter: (v) => `${v}`,
        colorize: true,
      },
    ],
  },
];

// Columns
const columnsMobile = ['10%', '40%', '50%'];

export { columnNamesMobile, columnsMobile };
