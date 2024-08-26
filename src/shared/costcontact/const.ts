import { CostContactItem } from './types';
import SMS from '@/assets/SMS.png';
import Call from '@/assets/Call Icon.png';
import Videocall from '@/assets/VideoIcon.svg';

export const COSTCONTACT_ITEMS: CostContactItem[] = [
  {
    imgUrl: SMS,
    title: 'Стоимость сообщения',
    currency: '$',
    price: '2',
    color: '#6C53E7',
    alt: 'SMS',
  },
  {
    imgUrl: Call,
    title: 'Стоимость звонка',
    currency: '$',
    price: '241',
    color: '#FFA012',
    alt: 'PHONE',
  },
  {
    imgUrl: Videocall,
    title: 'Стоимость видеозвонка',
    currency: '$',
    price: '2',
    color: '#58AAFF',
    alt: 'VIDEOCAMERA',
  },
];
