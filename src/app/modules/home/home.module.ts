/* importa el modulo comun de angular */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/* importa el modulo propio de routing */
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
