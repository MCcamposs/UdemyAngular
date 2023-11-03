/* importa el modulo comun de angular */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/* importa el modulo propio de routing */
import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule, /* queremos usar el modulo compartido */
  ]
})
export class HomeModule { }
