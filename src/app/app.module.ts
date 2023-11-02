import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router'; /* para usar el router-outlet */

@NgModule({
  declarations: [ /* componentees, directivas, pipes */
    AppComponent,
  ],
  imports: [ /* solo se importan otros modulos */
    BrowserModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
