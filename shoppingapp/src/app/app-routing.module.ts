import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOfProducts } from './components/listofproducts/listofproducts.component';
import { PostsComponent } from './components/posts/posts.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostdetailsComponent } from './components/postdetails/postdetails.component';

const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
