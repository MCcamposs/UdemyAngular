import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit{
  /* Si ponemos private solo lo podremos usar dentro de esta clase
  por eso da error */
  LinksMenu:Array<any> = [
    {
      name: "Home",
      icon: 'uil-estate',
    },
    {
      name: "Buscar",
      icon: 'uil-search', //nombre de la clase
    }
  ] /* será un array que contendrá un tipo de valor que aun no sabemos */

  constructor(){

  }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
