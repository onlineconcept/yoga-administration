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
    return this.http.get<Category[]>(this.baseUrl + 'category');
  }
  createCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.baseUrl + 'category', category);
  }
  editCategory(id: number, category: Category): Observable<Category> {
    return this.http.put<Category>(this.baseUrl + 'category/' + id, category);
  }
  deleteCategory(id: number) {
    return this.http.delete(this.baseUrl + 'category/' + id);
  }
}
