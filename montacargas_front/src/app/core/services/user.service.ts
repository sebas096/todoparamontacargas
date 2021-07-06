import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/shared/models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = environment.url_service;
  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<any> {
    return this.httpClient.get(`${this.url}/user`);
  };
  getUserById(idUser:string): Observable<any> {
    return this.httpClient.get(`${this.url}/user/${idUser}`);
  };
  saveUser(user: User): Observable<any> {
    return this.httpClient.post(`${this.url}/user`, user);
  }
  updateUser(user: User): Observable<any> {
    return this.httpClient.put(`${this.url}/user`, user);
  }
  passwordUser(user: User): Observable<any> {
    return this.httpClient.put(`${this.url}/user/register`, user);
  }
  recoverUser(user: User): Observable<any> {
    return this.httpClient.post(`${this.url}/user/recover`, user);
  }
  getUsersByBuildingAndRol(idBuilding, idRol) {
    return this.httpClient.get(`${this.url}/user/building/${idBuilding}/rol/${idRol}`);
  }
  updateProfileUser(newProfile:any): Observable<any> {
      return this.httpClient.post(`${this.url}/user/profile`, newProfile);
    }
  }


