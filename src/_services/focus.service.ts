import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Focus } from '../_models/focus';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FocusService {

  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getFocuses() {
    return this.http.get<Focus[]>(this.baseUrl + 'focuses');
  }
  createFocus(focus: Focus): Observable<Focus> {
    return this.http.post<Focus>(this.baseUrl + 'focuses', focus);
  }
  editFocus(id: string, focus: Focus): Observable<Focus> {
    return this.http.put<Focus>(this.baseUrl + 'focuses/' + id, focus);
  }
  deleteFocus(id: string) {
    return this.http.delete(this.baseUrl + 'focuses/' + id);
  }

}
