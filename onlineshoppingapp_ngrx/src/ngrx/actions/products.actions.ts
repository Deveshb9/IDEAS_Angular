import { createAction, props } from '@ngrx/store';
import { ProductModel } from 'src/models/product.model';

export const incrementLikes = createAction(
  '[App-Products-Component] IncrementLikes',
  (id) => {
    return { payload: id };
  }
  //   props<{ productId: number }>()
);
export const addProduct = createAction('[App-Products-Component] AddProduct');
export const deleteProduct = createAction(
  '[App-Products-Component] DeleteProduct'
);
export const loadProducts = createAction(
  '[App-Products-Component] Load Products'
);

export const loadProductsSuccess = createAction(
  '[App-Products-Component] Load Products Success',
  (products: ProductModel[]) => {
    return { payload: products };
  }
);
