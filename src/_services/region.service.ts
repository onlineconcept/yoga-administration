import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Region } from '../_models/region';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getRegions() {
    return this.http.get<Region[]>(this.baseUrl + 'regions');
  }
  createRegion(region: Region): Observable<Region> {
    return this.http.post<Region>(this.baseUrl + 'regions', region);
  }
  editRegion(id: string, region: Region): Observable<Region> {
    return this.http.put<Region>(this.baseUrl + 'regions/' + id, region);
  }
  deleteRegion(id: string) {
    return this.http.delete(this.baseUrl + 'regions/' + id);
  }

}
