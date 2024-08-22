import homeIcon from '@/assets/sidebar/home.svg';
import messagesIcon from '@/assets/sidebar/messages.svg';
import userIcon from '@/assets/sidebar/user.svg';
import settingsIcon from '@/assets/sidebar/settings.svg';

export const ITEMS = [
  { name: 'Главная', iconUrl: homeIcon, path: '/' },
  {
    name: 'Сообщение',
    iconUrl: messagesIcon,
    path: '/messages',
  },
  {
    name: 'Профили',
    iconUrl: userIcon,
    path: '/users',
  },
  {
    name: 'Настройки',
    iconUrl: settingsIcon,
    path: '/settings',
  },
];
