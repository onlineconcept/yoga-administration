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

  getEmployeers(page?, itemsPerPage?,customerStatus?, services?,categories?, regions?, focuses?, offers?,userParams?): Observable<PaginatedResult<Employeer[]>> {
    
    const paginatedResult: PaginatedResult<Employeer[]> = new PaginatedResult<Employeer[]>();
    let params = new HttpParams();
    if (page != null && itemsPerPage != null) {
      params = params.append('pageNumber', page);
      params = params.append('pageSize', itemsPerPage);
    }
    if(customerStatus != null)
    {
      
      customerStatus.filter(s => {
        if(s.selected === true)
        {
          params = params.append('customerStatus',s.id)
        }
      });
     
    }
   
    if(services != null)
    {
      var serviceString = '';
      services.filter(s => {
        if(s.selected === true)
        {
          params = params.append('service',s.id)
        }
      });
     
    }
    if(categories != null)
    {
      
      categories.filter(s => {
        if(s.selected === true)
        {
          params = params.append('category',s.id)
        }
      });
     
    }
    if(regions != null)
    {
      
      regions.filter(s => {
        if(s.selected === true)
        {
          params = params.append('region',s.id)
        }
      });
     
    }
    
    if(focuses != null)
    {
      
      focuses.filter(s => {
        if(s.selected === true)
        {
          params = params.append('focus',s.id)
        }
      });
     
    }
    if(offers != null)
    {
      
      offers.filter(s => {
        if(s.selected === true)
        {
          params = params.append('offer',s.id)
        }
      });
     
    }
    if(userParams != null){
      if(userParams.statuses != null)
      {
         if(userParams.statuses.open === true)
         {
            params = params.append('status','open')
         }
         if(userParams.statuses.closed === true){
          params = params.append('status','closed')
         }
      }
      if(userParams.primary != null){
        if(userParams.primary.mail === true)
         {
            params = params.append('primary','mail')
         }
         if(userParams.primary.name === true)
         {
            params = params.append('primary','name')
         }
         if(userParams.primary.phone === true)
         {
            params = params.append('primary','phone')
         }
      }
      if(userParams.secondary != null){
        if(userParams.secondary.mail === true)
         {
            params = params.append('primary','mail')
         }
         if(userParams.secondary.name === true)
         {
            params = params.append('primary','name')
         }
         if(userParams.secondary.phone === true)
         {
            params = params.append('primary','phone')
         }
      }
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
