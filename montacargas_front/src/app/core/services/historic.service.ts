import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HistoricService {

  url = environment.url_service;
  constructor(private httpClient: HttpClient) { }

  getHistoric(idInvoice: string): Observable<any> {
    return this.httpClient.get(`${this.url}/historic/${idInvoice}`);
  };

  saveHistoric(historic: any): Observable<any> {
    return this.httpClient.post(`${this.url}/historic`,historic);
  };

}



