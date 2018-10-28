import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Category } from '../_models/category';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get<Category[]>(this.baseUrl + 'categories');
  }
  createCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.baseUrl + 'categories', category);
  }
  editCategory(id: string, category: Category): Observable<Category> {
    return this.http.put<Category>(this.baseUrl + 'categories/' + id, category);
  }
  deleteCategory(id: string) {
    return this.http.delete(this.baseUrl + 'categories/' + id);
  }
}
