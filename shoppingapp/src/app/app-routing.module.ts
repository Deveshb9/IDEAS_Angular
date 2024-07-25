import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOfProducts } from './components/listofproducts/listofproducts.component';
import { PostsComponent } from './components/posts/posts.component';

const routes: Routes = [
  {
    path: '',
    component: ListOfProducts,
  },
  {
    path: 'posts',
    component: PostsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
