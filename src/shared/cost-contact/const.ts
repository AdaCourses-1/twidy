import { CostcontactItem } from "./types";
import SMS from '@/assets/SMS.png';
import Call from '@/assets/Call Icon.png';
import Videocall from '@/assets/VideoIcon.svg';


export const COSTCONTACT_ITEMS: CostcontactItem[] = [
  {
    imgUrl: SMS,
    title: "Стоимость сообщения",
    change:'Изменить',
    price: '2$',
    color: "#6C53E7", 
  },
  {
    imgUrl: Call,
    title: "Стоимость звонка",
    change:'Изменить',
    price: '241$',
    color: "#FFA012", 
  },
  {
    imgUrl: Videocall,
    title: "Стоимость видеозвонка",
    change:'Изменить',
    price: '2$',
    color: "#58AAFF", 
  },
];
