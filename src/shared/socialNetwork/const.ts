import Twitter from '@/assets/twit.svg';
import Instagram from '@/assets/inst.svg';
import Vk from '@/assets/vk.svg';
import Facebook from '@/assets/Facebook.svg';
import Twitch from '@/assets/Twitch.svg';
import Linkedln from '@/assets/Linkedln.svg';
import { Network } from './types';

export const SOCIAL_NETWORK: Network[] = [
  {
    name: 'Vanilnoe_nebo_1',
    description: '432 123 подписчиков',
    imgURL: Twitter,
  },
  {
    name: 'Подключить Facebook',
    // description: '432 123 подписчиков',
    imgURL: Facebook,
  },

  {
    name: 'Vanilnoe_nebo_1',
    description: '432 123 подписчиков',
    imgURL: Instagram,
  },
  {
    name: 'Подключить Twitch',
    // description: '432 123 подписчиков',
    imgURL: Twitch,
  },
  {
    name: 'Vanilnoe_nebo_1',
    description: '432 123 подписчиков',
    imgURL: Vk,
  },
  {
    name: 'Подключить Linkedln',
    // description: '432 123 подписчиков',
    imgURL: Linkedln,
  },
];
