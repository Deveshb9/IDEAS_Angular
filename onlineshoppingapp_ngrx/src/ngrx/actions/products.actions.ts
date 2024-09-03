import { createAction, props } from '@ngrx/store';

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
