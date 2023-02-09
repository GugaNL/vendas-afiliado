import { StaticImageData } from "next/image";

export interface SubmenuMobileItems {
  name: string;
  link: string;
}

export interface MenuMobileItems {
  id: number;
  title: string;
  submenu: Array<SubmenuMobileItems>;
  image?: string;
  link: string;
}

export interface MenuItem {
  id: number;
  name: string;
  submenu?: Array<SubmenuMobileItems>;
}

export interface QuestionItem {
  id: number;
  title: string;
  desc: string;
}

export interface ProductBox {
  id?: number;
  desc?: string;
  title: string;
  price: string;
  imageSrc: StaticImageData;
}

export interface Breackpoints {
  width: number;
  itemsToShow: number;
}

export interface LocationData {
  logradouro?: string;
  complemento?: string;
  bairro?: string;
  localidade: string;
  uf: string;
}

export interface Category {
  name: string;
}

export interface MinicartProduct {
  name: string;
  imageSrc: StaticImageData;
  size: string;
  quantity: number;
  price: string;
}