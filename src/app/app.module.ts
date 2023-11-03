import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; /* para usar el router-outlet */

@NgModule({
  declarations: [ /* componentees, directivas, pipes */
    AppComponent,
  ],
  imports: [ /* solo se importan otros modulos */
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
