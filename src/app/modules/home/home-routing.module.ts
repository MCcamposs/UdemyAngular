import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* donde vamos a empezar a definir nuestras rutas */
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
