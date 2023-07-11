import zafares from './assets/zafares.png';
import gown from './assets/wedding-photography.png';
import bike from './assets/mountain-bike.png';

export default [
  {
    id: 1,
    title: 'Life Lessons with Katie Zaferes',
    description:
      'I will share with you what I call "Positively Impactful Moments of Disappointment." Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.',
    amount: 136,
    coverImg: zafares,
    imgAlt: 'swimmer',
    stats: {
      rate: 5.0,
      price: 6,
    },
    country: 'USA',
    openSpots: 0,
  },
  {
    id: 2,
    title: 'Learn Wedding Photography',
    description:
      "Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that'll last a lifetime.",
    amount: 125,
    coverImg: gown,
    imgAlt: 'gown',
    stats: {
      rate: 5.0,
      price: 30,
    },
    country: 'Online',
    openSpots: 27,
  },
  {
    id: 3,
    title: 'Group Mountain Biking',
    description:
      'Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)',
    amount: 50,
    coverImg: bike,
    imgAlt: 'bike',
    stats: {
      rate: 4.8,
      price: 2,
    },
    country: 'Norway',
    openSpots: 3,
  },
];
