import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  url = environment.url_service;
  constructor(private httpClient: HttpClient) { }

    getDocumentByInvoice(idInvoice: string): Observable<any> {
    return this.httpClient.get(`${this.url}/document/invoice/${idInvoice}`);
  };

}

