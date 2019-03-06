import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { LOCAL_STORAGE,WebStorageService } from 'angular-webstorage-service';
import { Router } from '@angular/router';
import { AutentificacionService } from '../services/autentificacion.service';
import { HttpClient } from '@angular/common/http';
import { System } from '../system.conf';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public submitted = false;
  private data: any = [];

  constructor(private formBuilder: FormBuilder,
    @Inject(LOCAL_STORAGE) private storage: WebStorageService,
    public router: Router,
    //private servicioAutentificacion : AutentificacionService,
    private http : HttpClient
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]], 
      password: ['', [Validators.required, Validators.pattern(/^[^\s@]+$/)]]
    });
  }

  get f() { return this.loginForm.controls; }

  public onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.validarUsuario();
  }

  private validarUsuario() {

    //let formData: FormData = this.generarFormUsuario(this.loginForm.value.email, this.loginForm.value.password);
    this.http.post(System.API_URL+"login",{email:this.loginForm.value.email,password:this.loginForm.value.password},{responseType:'json'}).subscribe(
      (respuesta : any)=>{
        console.log("exito",respuesta);
      },
      (error:any)=>{
        console.log("error :",error);
      }
    )
    /*this.servicioAutentificacion.login(formData).subscribe(
      (respuesta : any)=>{
        console.log("exito",respuesta);
      },
      (error:any)=>{
        console.log("error :",error);
      }*/
      /*(response: any ) => { //UsuarioMensajeDto
        console.log("Respuesta exitosa");
        if (response == null) {
          this.mensajesGlobales.showMessage("Error Login", Constants.MENSAJE_LOGIN_ERROR_USUARIO_NO_EXISTE, null, 500);
        }else{
          switch (response.status) {
            case 0:
              let tokenUsuario = response.token;
              this.saveInLocal('token',tokenUsuario);
              this.router.navigate([sistemConstants.ROUTE_INICIO]);
            break;
            case 1:
              this.mensajesGlobales.showMessage("Error Login", Constants.MENSAJE_LOGIN_ERROR_USUARIO_CONSTRASENA_ERROR, null, 500);
            break;
            case 2: //administrador no reconocido en base de datos
              this.mensajesGlobales.showMessage("Error Login", Constants.MENSAJE_USUARIO_NO_RECONOCIDO , null, 500);
              //this.mensajesGlobales.showMessage("Error Login", Constants.MENSAJE_ADMINISTRADOR_NO_RECONOCIDO_BD, null, 500);
            break;
            case 3: //administrador no reconocido en LDAP
              this.mensajesGlobales.showMessage("Error Login", Constants.MENSAJE_USUARIO_NO_RECONOCIDO , null, 500);
              //this.mensajesGlobales.showMessage("Error Login", Constants.MENSAJE_ADMINISTRADOR_NO_RECONOCIDO_LDAP, null, 500);
            break;
            case 4: //usuario no posee roles
              this.mensajesGlobales.showMessage("Error Login", Constants.MENSAJE_USUARIO_NO_POSEE_ROLES , null, 500);
              //this.mensajesGlobales.showMessage("Error Login", Constants.MENSAJE_ADMINISTRADOR_NO_RECONOCIDO_LDAP, null, 500);
            break;
            case 5: //usuario no posee roles activos
              this.mensajesGlobales.showMessage("Error Login", Constants.MENSAJE_USUARIO_NO_POSEE_ROLES_ACTIVOS , null, 500);
              //this.mensajesGlobales.showMessage("Error Login", Constants.MENSAJE_ADMINISTRADOR_NO_RECONOCIDO_LDAP, null, 500);
            break;
            case 6: //usuario no posee empresas activas
              this.mensajesGlobales.showMessage("Error Login", Constants.MENSAJE_USUARIO_NO_POSEE_EMPRESAS_ACTIVAS , null, 500);
              //this.mensajesGlobales.showMessage("Error Login", Constants.MENSAJE_ADMINISTRADOR_NO_RECONOCIDO_LDAP, null, 500);
            break;
            case 7: //usuario no posee empresas activas
              this.mensajesGlobales.showMessage("Error Login", Constants.MENSAJE_USUARIO_ADMINISTRADOR_NO_POSEE_CORREO , null, 500);
              //this.mensajesGlobales.showMessage("Error Login", Constants.MENSAJE_ADMINISTRADOR_NO_RECONOCIDO_LDAP, null, 500);
            break;
            default:
              break;
          }  
        }
      },
      (error) => {
        console.log("Error", error);

      }*/
    //)
  }

  private generarFormUsuario(email: string, password: string) {
    let formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    return formData;
  }

  private getFromLocal(key): any {
    let value = this.storage.get(key);
    return value;
  }

  private saveInLocal(key, val): void {
    //console.log('recieved= key:' + key + 'value:' + val);
    this.storage.set(key, val);
    this.data[key] = this.storage.get(key);
    //console.log(this.data);
  }
}
