import { Observable } from 'rxjs';

export interface PodItem {
  id: number;
  title: string;
  iconClass: string;
  type: string;
  subTitle?: string;
  price: number;
  qty: number;
  imageUrl: string;
}

export interface PodItemOrder extends PodItem {
  time: number;
}

export abstract class ProductsData {
  abstract getProducts(): Observable<PodItem[]>;
}
