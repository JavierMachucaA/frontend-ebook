import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent implements OnInit {

  public categorias : any[] = [
    {title:'Comidas'},
    {title:'Postres'},
    {title:'Pastelería'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
