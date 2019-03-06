import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { System } from '../system.conf';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {
  private URL = System.API_URL;
  private LOGIN = 'login'
  constructor(
    private readonly httpCliente: HttpClient,
    private jwtHelper: JwtHelperService
    ){
  }

  public login(formData: FormData) :Observable<any> {
    /*let loginUri = URL+this.LOGIN;
    return this.httpCliente.post(loginUri,formData,{responseType:'json'});*/
    console.log("aa");
    return new Observable<any>() ;
  }
}
