import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit{
 
  mainMenu: {defaultOptions:Array<any>, accessLink:Array<any>
  }= {defaultOptions: [], accessLink: []}

  customOptions:Array<any> =[]

  constructor(){

  }

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: '',
        router: '/',
      },
      {
        name: 'Buscar',
        icon: '',
        router: ['/', 'history'],
      },
      {
        name: 'Tu biblioteca',
        icon: '',
        router: ['/', 'favorite'],
      }
    ]

    this.mainMenu.accessLink = [
      {
        name:'Crear lista',
        icon:''
      },
      {
        name:'Canciones que te gustan',
        icon:''
      }
    ]

    this.customOptions = [
      {
        name: 'Mi lista 1',
        router:['/']
      },
      {
        name: 'Mi lista 2',
        router:['/']
      },
      {
        name: 'Mi lista 3',
        router:['/']
      },
    ]
  }

}
