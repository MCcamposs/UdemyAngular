import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';

/* donde vamos a empezar a definir nuestras rutas */
const routes: Routes = [
  {
    /* venimos desde el app-routing -> home.moduke -> aqui */
    path:'', // http://localhost:4200/home/dashboard
    component: HomepageComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
