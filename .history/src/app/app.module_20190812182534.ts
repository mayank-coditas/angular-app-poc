import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { AppReducer, AppState } from './store/reducer';

export interface MyAppState {
  card:  AppState
}

export const reducers : ActionReducerMap<MyAppState> = {
  mypp: AppReducer
};

@NgModule({
  declarations: [
    AppComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({})
  ],
  entryComponents: [
    CardComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) {

  }

  ngDoBootstrap() {
    const el = createCustomElement(CardComponent, {
      injector: this.injector
    });
    customElements.define('custom-card', el);
  }
}
