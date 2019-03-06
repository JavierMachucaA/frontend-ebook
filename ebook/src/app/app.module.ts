import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {MenuModule} from 'primeng/menu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MegaMenuModule} from 'primeng/megamenu';
import { HeaderComponent } from './layout/header/header.component';
import { TemplateComponent } from './layout/template/template.component';
import { ContentComponent } from './components/content/content.component';
import { NgbModule, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { MuestraImagenesComponent } from './components/muestra-imagenes/muestra-imagenes.component';
import { LeadComponent } from './components/lead/lead.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactoComponent } from './components/contacto/contacto.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { RecetasComponent } from './components/recetas/recetas.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CategoriaComponent } from './components/categorias/categoria.component';
import { RecetaComponent } from './components/receta/receta.component';
import {PanelModule} from 'primeng/panel';
import {CardModule} from 'primeng/card';
import {AccordionModule} from 'primeng/accordion';
import {ListboxModule} from 'primeng/listbox';
import { LoginComponent } from './login/login.component';
import { StorageServiceModule } from 'angular-webstorage-service';
import {ButtonModule} from 'primeng/button';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TemplateComponent,
    ContentComponent,
    MuestraImagenesComponent,
    LeadComponent,
    ContactoComponent,
    NosotrosComponent,
    RecetasComponent,
    InicioComponent,
    CategoriaComponent,
    RecetaComponent,
    LoginComponent
  ],
  imports: [
    MenuModule,
    BrowserModule,
    BsDropdownModule.forRoot(), 
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    MegaMenuModule,
    NgbModule,
    PanelModule,
    CardModule,
    ListboxModule,
    AccordionModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StorageServiceModule,
    ButtonModule,
    JwtModule,
    HttpClientModule
    
  ],
  providers: [ NgbCarouselConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
