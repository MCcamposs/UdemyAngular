import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


/* array con valores de rutas */
const routes: Routes = [ //TODO: router-outlet (Padre)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }