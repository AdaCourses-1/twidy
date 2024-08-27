import Twitter from '@/assets/twit.svg';
import Instagram from '@/assets/inst.svg';
import Vk from '@/assets/vk.svg';
import Facebook from '@/assets/Facebook.svg';
import Twitch from '@/assets/Twitch.svg';
import Linkedln from '@/assets/Linkedln.svg';

import { Network } from './types';

export const SOCIAL_NETWORK: Network[] = [
  {
    id: 0,
    name: 'Vanilnoe_nebo_1',
    description: '432 123 подписчиков',
    imgURL: Twitter,
  },
  {
    id: 1,
    name: 'Подключить Facebook',
    description: '',
    imgURL: Facebook,
  },

  {
    id: 2,
    name: 'Vanilnoe_nebo_1',
    description: '432 123 подписчиков',
    imgURL: Instagram,
  },
  {
    id: 3,
    name: 'Подключить Twitch',
    description: '',
    imgURL: Twitch,
  },
  {
    id: 4,
    name: 'Vanilnoe_nebo_1',
    description: '432 123 подписчиков',
    imgURL: Vk,
  },
  {
    id: 5,
    name: 'Подключить Linkedln',
    description: '',
    imgURL: Linkedln,
  },
];
