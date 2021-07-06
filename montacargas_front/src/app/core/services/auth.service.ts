import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  url = environment.url_service;
  redirect_url: String;
  constructor(private http: HttpClient) { }

  login(login): Observable<any> {
    return this.http.post(`${this.url}/token`, login);
  }
  setSession(token) {
    const expiresAt = token.expireAt;

    localStorage.setItem('id_token', token.token);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt));
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  }

  isLoggedIn() {
    const current = new Date();
    return current.getTime() < this.getExpiration() * 1000;

  }
  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    return !!expiration ? JSON.parse(expiration) : 0;
  }
  getToken() {
    return localStorage.getItem('id_token');
  }
  
}


/*
Ingresa credenciales
Servidores response si esta autorizado
Se guarda el token
Se debe validar que existe el token y que no haya expirado (Vulnerable por ser front)
Guard para acceder a rutas
Obtener roles del token
DEvolver al Login si no esta logueado
Eliminar Datos al cerrar sesion
*/