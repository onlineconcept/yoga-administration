import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { CustomerStatus } from '../_models/customer-status';
import { htmlAstToRender3Ast } from '@angular/compiler/src/render3/r3_template_transform';

@Injectable({
  providedIn: 'root'
})
export class CustomerStatusService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getStatuses() {
    return this.http.get<CustomerStatus[]>(this.baseUrl + 'customerstatuses');
  }
  createStatus(customerStatus: CustomerStatus): Observable<CustomerStatus> {
    return this.http.post<CustomerStatus>(this.baseUrl + 'customerstatuses', customerStatus);
  }
  editStatus(id: string, customerStatus: CustomerStatus): Observable<CustomerStatus> {
    return this.http.put<CustomerStatus>(this.baseUrl + 'customerstatuses/' + id, customerStatus);
  }
  deleteStatus(id: string) {
    return this.http.delete(this.baseUrl + 'customerstatuses/' + id);
  }
}
