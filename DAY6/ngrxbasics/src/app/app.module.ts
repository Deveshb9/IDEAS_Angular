import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from '../ngrx/reducers/counter.reducer';
import { CounterComponent } from './counter/counter.component';
import { SecondcounterComponent } from './secondcounter/secondcounter.component';

@NgModule({
  declarations: [AppComponent, CounterComponent, SecondcounterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ count: counterReducer }, {}),
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
