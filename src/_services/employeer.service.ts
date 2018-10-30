import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Employeer } from '../_models/employeer';
import { Observable } from 'rxjs';
import { PaginatedResult } from 'src/_models/pagination';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EmployeerService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getEmployeers(page?, itemsPerPage?): Observable<PaginatedResult<Employeer[]>> {
    const paginatedResult: PaginatedResult<Employeer[]> = new PaginatedResult<Employeer[]>();
    let params = new HttpParams();
    if (page != null && itemsPerPage != null) {
      params = params.append('pageNumber', page);
      params = params.append('pageSize', itemsPerPage);
    }
    return this.http.get<Employeer[]>(this.baseUrl + 'employeers', { observe: 'response', params})
    .pipe(
      map(response => {
        paginatedResult.result = response.body;
        if (response.headers.get('pagination') != null) {
          paginatedResult.pagination = JSON.parse(response.headers.get('pagination'));
        }
        return paginatedResult;
      })
    );
  }
  createEmployeer(customerStatus: Employeer): Observable<Employeer> {
    return this.http.post<Employeer>(this.baseUrl + 'employeers', customerStatus);
  }
  editEmployeer(id: string, customerStatus: Employeer): Observable<Employeer> {
    return this.http.put<Employeer>(this.baseUrl + 'employeers/' + id, customerStatus);
  }
  deleteEmployeer(id: string) {
    return this.http.delete(this.baseUrl + 'employeers/' + id);
  }

}
