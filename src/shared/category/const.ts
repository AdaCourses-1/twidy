import Music from "@/assets/Music.svg";
import Acter from "@/assets/acter.svg";
import YouTuber from "@/assets/youtuber.svg";
import Bloger from "@/assets/bloger.svg";
import Comic from "@/assets/comic.svg";
import { CategoryItem } from "./types";

export const CATEGORY_ITEMS: CategoryItem[] = [
  {
    id: 0,
    name: "Музыканты",
    imgURL: Music,
    title: 'Категория "Музыканты"',
  },
  {
    id: 1,
    name: "Актёры",
    imgURL: Acter,
    title: 'Категория "Актёры"',
  },
  {
    id: 2,
    name: "YouTubers",
    imgURL: YouTuber,
    title: 'Категория "YouTubers"',
  },
  {
    id: 3,
    name: "Блогеры",
    imgURL: Bloger,
    title: 'Категория "Блогеры"',
  },
  {
    id: 4,
    name: "Комики",
    imgURL: Comic,
    title: 'Категория "Комики"',
  },
  {
    id: 5,
    name: "Модели",
    imgURL: Music,
    title: 'Категория "Модели"',
  },
];
