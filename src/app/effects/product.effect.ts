import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as productActions from '../store/product/product.action';
import { catchError, map, of, switchMap } from 'rxjs';
import { ProductService } from '../services/product.service';

@Injectable({
  providedIn: 'root',
})
export class ProductEffect {
  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(productActions.getProducts),
      switchMap(() => {
        return this.productService.getAllPhoto().pipe(
          map((photos) =>
            productActions.getProductSuccess({
              photos: photos,
            })
          ),
          catchError((error) => {
            return of(
              productActions.getProductFaile({
                error: error,
              })
            );
          })
        );
      })
    )
  );
}
