import { Component } from '@angular/core';
import { fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'rxjs_operators';
  ngOnInit() {
    fromEvent(document, 'click')
      .pipe(
        map((event: any) => {
          return [event.clientX, event.clientY];
        })
      )
      .subscribe(console.log);
  }
}
