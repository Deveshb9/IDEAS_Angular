import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listofproducts',
  templateUrl: './listofproducts.component.html',
  styleUrls: ['./listofproducts.component.css'],
})
export class ListofproductsComponent {
  products$: Observable<any>; // ProductModel[]
  constructor(public store: Store<{ products: any }>) {
    this.products$ = this.store.select('products');
  }
}
