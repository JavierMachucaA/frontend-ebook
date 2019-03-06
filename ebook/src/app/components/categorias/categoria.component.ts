import { Component, OnInit, Input } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  @Input() categoria;
  public recetasCategoria: SelectItem[] = [];
  public recetaSeleccionada : any ;
  public recetas: any[] = [
    {
      nombre: 'Pure con semillas',
      categoria: 'Comidas',
      descripcion: 'Pasos a crear la receta'
    },
    {
      nombre: 'Flan sin azucar',
      categoria: 'Postres',
      descripcion: 'Pasos a crear la receta'
    },
    {
      nombre: 'Brownie Años Dorados',
      categoria: 'Pastelería',
      descripcion: 'Pasos a crear la receta'
    }
  ]

  constructor() { }

  ngOnInit() {
    console.log("categoria : ", this.categoria);
    for (let receta of this.recetas) {
      //console.log(receta.categoria,this.categoria.title,receta.categoria === this.categoria.title);
      if (receta.categoria === this.categoria.title && this.recetasCategoria.length<3) {

        let recetaSelectItem = { label: receta.nombre, value: receta };
        this.recetasCategoria.push(recetaSelectItem);
        //console.log("agrega receta : ",this.recetasCategoria);
      }
    }
    if (this.recetasCategoria.length > 0) {
      this.recetasCategoria = [...this.recetasCategoria, {label:'...', value:'all'}];
    }

  }

  seleccionarReceta (event){
    console.log("Receta seleccionada :",event);
  }


}


