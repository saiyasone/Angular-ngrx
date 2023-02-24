import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as cartActions from '../../store/cart/cart.action';
import * as cartSelector from '../../store/cart/cart.selector';
import * as productActions from '../../store/product/product.action';
import * as productSelector from '../../store/product/product.selector';
import { Photo } from '../../models/photo.model';
import { ProductService } from '../../services/product.service';
import { Cart, CartItem } from '../../store/cart/cart.reducer';s

import { ProductState } from '../../store/product/product.reducer';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Photo[] = [];
  cartItems: CartItem[];
  totalItems = 0;
  loading$: Observable<boolean>;
  constructor(
    private productService: ProductService,
    private store: Store<{ cart: Cart; product: ProductState }>
  ) {}

  ngOnInit() {
    this.store.dispatch(cartActions.fetchCart());
    this.store.dispatch(productActions.getProducts());

    // ======== No usage selector =========
    // cart
    // this.store.select('cart').subscribe((data) => {
    //   this.totalItems = data.total;
    // });
    // this.store.select('cart').subscribe((data) => {
    //   this.cartItems = data.cartItems;
    // });
    // product
    // this.store.select('product').subscribe((data) => {
    //   this.products = data.photos.slice(0, 20);
    // });
    this.loading$ = this.store.select('product').pipe(map((el) => el.loading));

    // ======== Usage selector =========
    // cart
    this.store.select(cartSelector.totalSelector).subscribe((data) => {
      this.totalItems = data;
    });
    this.store.select(cartSelector.cartItemSelector).subscribe((data) => {
      this.cartItems = data;
    });
    this.store.select(productSelector.productsSelector).subscribe((data) => {
      this.products = data.slice(0, 20);
    });
  }

  addCart(item: Photo) {
    const cart: CartItem = {
      id: item.id,
      name: item.title,
      qty: 1,
      img: item.thumbnailUrl,
    };
    this.store.dispatch(cartActions.addCart(cart));
  }

  delCart(id: number) {
    this.store.dispatch(
      cartActions.delCart({
        cardId: id,
      })
    );
  }
}
