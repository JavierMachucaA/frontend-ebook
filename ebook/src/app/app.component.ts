import { Component } from '@angular/core';
import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
import { enableProdMode } from '@angular/core';
enableProdMode();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ebook';

    constructor(){
        console.log("Inicando aplicación..");
    }


  ngOnInit() {
    
    
  }


}
