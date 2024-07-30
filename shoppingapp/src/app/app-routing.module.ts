import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOfProducts } from './components/listofproducts/listofproducts.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostdetailsComponent } from './components/postdetails/postdetails.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { CartitemsComponent } from './components/cartitems/cartitems.component';
import { TemplatedrivennewproductComponent } from './components/forms/templatedrivennewproduct/templatedrivennewproduct.component';
import { ModeldrivennewproductsComponent } from './components/forms/modeldrivennewproducts/modeldrivennewproducts.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: ListOfProducts,
      },
      {
        path: 'posts',
        component: PostsComponent,
      },
      {
        path: 'postdetails/:id',
        component: PostdetailsComponent,
      },
      {
        path: 'productdetails/:id',
        component: ProductdetailsComponent,
      },
      {
        path: 'cartitems',
        component: CartitemsComponent,
      },
      {
        path: 'addItem',
        component: TemplatedrivennewproductComponent,
      },
      {
        path: 'addItemModel',
        component: ModeldrivennewproductsComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
