import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Service } from '../_models/service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getServices() {
    return this.http.get<Service[]>(this.baseUrl + 'services');
  }
  createService(service: Service): Observable<Service> {
    return this.http.post<Service>(this.baseUrl + 'services', service);
  }
  editService(id: string, service: Service): Observable<Service> {
    return this.http.put<Service>(this.baseUrl + 'services/' + id, service);
  }
  deleteService(id: string) {
    return this.http.delete(this.baseUrl + 'services/' + id);
  }

}
