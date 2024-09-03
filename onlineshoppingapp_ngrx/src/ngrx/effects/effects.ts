import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { ProductService } from 'src/app/service/products.service';

@Injectable()
export class ProductsEffects {
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[App-Products-Component] Load Products'),
      exhaustMap(() =>
        this.productsService.getAllProducts().pipe(
          map((products) => ({
            type: '[App-Products-Component] Load Products Success',
            payload: products,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private productsService: ProductService
  ) {}
}
