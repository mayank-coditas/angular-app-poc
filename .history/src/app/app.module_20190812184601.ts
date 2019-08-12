import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertComponent } from './card/card.component';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { AppReducer } from './store/reducer';

// // export const reducers : ActionReducerMap<AppState> = {
// //   shoppingList: fromShoppingList.shoppingListReducer,
// //   auth: fromAuth.authReducer
// }

// @NgModule({
//   declarations: [
//     AppComponent,
//     CardComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     StoreModule.forRoot({mypp: AppReducer})
//   ],
//   entryComponents: [
//     CardComponent
//   ]
// })
// export class AppModule {
//   constructor(private injector: Injector) {

//   }

//   ngDoBootstrap() {
//     const el = createCustomElement(CardComponent, {
//       injector: this.injector
//     });
//     customElements.define('custom-card', el);
//   }
// }




@NgModule({
  declarations: [AlertComponent],
  imports: [BrowserModule, StoreModule.forRoot({mypp: AppReducer})],
  entryComponents: [AlertComponent],
  bootstrap: []
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const ngElement = createCustomElement(AlertComponent, {
      injector: this.injector
    });
    customElements.define('my-alert', ngElement);
  }
}
