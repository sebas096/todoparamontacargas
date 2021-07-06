import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rol } from 'src/app/shared/models/rol.model';

@Injectable({
  providedIn: 'root'
})

export class RolService {
  url = environment.url_service;
  constructor(private httpClient: HttpClient) { }
  token = environment.token;  

  getRoles(): Observable<any> {
    return this.httpClient.get(`${this.url}/rol`,{headers: new HttpHeaders({Authorization: this.token})});
  }
  setRoles(rol: Rol) {
    return this.httpClient.post(`${this.url}/rol`, rol,{headers: new HttpHeaders({Authorization: this.token})});
  }
  deleteRoles(idRol: number) {
    return this.httpClient.delete(`${this.url}/rol/${idRol}`,{headers: new HttpHeaders({Authorization: this.token})});
  }
  getRolesByBuildingId(buildingId)
  {
    return this.httpClient.get(`${this.url}/rol/building/${buildingId}`)
  }
}




