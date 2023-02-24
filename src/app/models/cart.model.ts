import { Photo } from './photo.model';

export interface Cart {
  total: number;
  cartItems: CartItem[];
  photo: Photo[];
}
export interface CartItem {
  id: number;
  name: string;
  img?: string;
  qty: number;
}
