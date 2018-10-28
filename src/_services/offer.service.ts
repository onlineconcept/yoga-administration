import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Offer } from '../_models/offer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getOffers() {
    return this.http.get<Offer[]>(this.baseUrl + 'offers');
  }
  createOffer(offer: Offer): Observable<Offer> {
    return this.http.post<Offer>(this.baseUrl + 'offers', offer);
  }
  editOffer(id: string, offer: Offer): Observable<Offer> {
    return this.http.put<Offer>(this.baseUrl + 'offers/' + id, offer);
  }
  deleteOffer(id: string) {
    return this.http.delete(this.baseUrl + 'offers/' + id);
  }

}
