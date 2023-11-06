import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/* se importo automaticamente */
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';
/* se actualiza en el mdoulo más cercano de su cercania, por eso aqui tenemos el card t el section */
/* Tocaría exportarlo para usarlo fuera del shared */
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';



@NgModule({
  declarations: [
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    CardPlayerComponent,
    SectionGenericComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    SectionGenericComponent,
  ]
})
export class SharedModule { } 
