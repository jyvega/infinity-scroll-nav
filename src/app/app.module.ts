import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CardComponent} from './share/components/card/card.component';
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {ServiceWorkerModule} from '@angular/service-worker';
import {NavComponent} from './share/components/nav/nav.component';
import {environment} from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
