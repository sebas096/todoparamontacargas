import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  
  url = environment.url_service;
  constructor(private httpClient: HttpClient) { }
  
  setInvoice(invoice: any): Observable<any> {
    return this.httpClient.post(`${this.url}/invoice`,invoice);
  };

  getInvoicePending(idUser: any): Observable<any> {
    return this.httpClient.get(`${this.url}/invoice/assigned/${idUser}`);
  };

  getInvoiceExecuted(idUser: any): Observable<any> {
    return this.httpClient.get(`${this.url}/invoice/executed/${idUser}`);
  };

  getProviders(): Observable<any> {
    return this.httpClient.get(`${this.url}/provider`);
  };

  getInvoiceById(idUser,idInvoice): Observable<any>{
    return this.httpClient.get(`${this.url}/invoice/${idInvoice}/${idUser}`);
  }

  getReportInvoice(invoiceDate): Observable<any>{
    return this.httpClient.post(`${this.url}/invoice/reporting/`, invoiceDate);
  }
}
