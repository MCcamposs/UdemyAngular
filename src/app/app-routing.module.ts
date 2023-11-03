import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


/* array con valores de rutas */
const routes: Routes = [ //TODO: router-outlet (Padre)
  {
    path: '',  /* en la ruta raíz cargará el home.module */
    loadChildren:()=>import('./modules/home/home.module').then(m => m.HomeModule) /*ruta del modulo que queremos que se cargue*/
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }