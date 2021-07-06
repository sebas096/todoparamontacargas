import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Building } from 'src/app/shared/models/building.model';
import { WorkFlow } from 'src/app/shared/models/work-flow.model';

@Injectable({
  providedIn: 'root'
})
export class WorkFlowService {

  url = environment.url_service;
  constructor(private httpClient: HttpClient) { }
  
  newWorkFlow(workFlow: WorkFlow): Observable<any> {
    return this.httpClient.post(`${this.url}/workflow`,workFlow);
  };
  getWorkFlows(): Observable<any> {
    return this.httpClient.get(`${this.url}/workflow`);
  }
  deleteBuilding(id: String): Observable<any> {
    return this.httpClient.delete(`${this.url}/building/${id}`);
  }
  getWorkFlowByBuilding(id)
  {
    return this.httpClient.get(`${this.url}/workflow/building/${id}`);
  }
}
