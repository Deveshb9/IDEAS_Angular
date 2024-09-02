import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../../ngrx/actions/actions';

@Component({
  selector: 'app-secondcounter',
  templateUrl: './secondcounter.component.html',
  styleUrl: './secondcounter.component.css',
})
export class SecondcounterComponent {
  count$: Observable<number>;
  constructor(public store: Store<{ count: number }>) {
    this.count$ = this.store.select('count');
  }
}
