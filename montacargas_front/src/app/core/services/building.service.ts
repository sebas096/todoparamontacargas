import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Building } from 'src/app/shared/models/building.model';

@Injectable({
  providedIn: 'root'
})
export class BuildingService {

  url = environment.url_service;
  constructor(private httpClient: HttpClient) { }
  
  token = environment.token;  

  getBuilding(): Observable<any> {
    return this.httpClient.get(`${this.url}/building`,{headers: new HttpHeaders({Authorization: this.token})});
  };
  newBuilding(building: Building): Observable<any> {
    return this.httpClient.post(`${this.url}/building`,building, {headers: new HttpHeaders({Authorization: this.token})});
  };
  updateBuilding(building: Building): Observable<any> {
    return this.httpClient.put(`${this.url}/building`, building, {headers: new HttpHeaders({Authorization: this.token})});
  }
  deleteBuilding(id: String): Observable<any> {
    return this.httpClient.delete(`${this.url}/building/${id}`, {headers: new HttpHeaders({Authorization: this.token})});
  }
  getBuildingWithWorkFlow(idUser):Observable<any>
  {
    return this.httpClient.get(`${this.url}/building/building-workflow/${idUser}`);
  }
}
