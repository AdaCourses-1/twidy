import { CostContactItem } from './types';
import {
  MessageCircle,
  Phone,
  Video,
} from 'lucide-react';

export const COSTCONTACT_ITEMS: CostContactItem[] = [
  {
    icon: MessageCircle,
    title: 'Стоимость сообщения',
    currency: '$',
    price: 2,
    color: '#6C53E7',
    alt: 'SMS',
    size: 65,
  },
  {
    icon: Phone ,
    title: 'Стоимость звонка',
    currency: '$',
    price: 241,
    color: '#FFA012',
    alt: 'PHONE',
    size: 65,
  },
  {
    icon: Video,
    title: 'Стоимость видеозвонка',
    currency: '$',
    price: 2,
    color: '#58AAFF',
    alt: 'VIDEOCAMERA',
    size: 75,
  },
];
