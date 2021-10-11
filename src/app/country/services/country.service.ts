import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Country } from '../interfaces/Country';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private baseUrl = 'https://restcountries.com/v3.1';
  private baseUrlV2 = 'https://restcountries.com/v2';

  get getParams() {
    return new HttpParams().set('fields', 'name,capital,cca2,flags,population');
  }

  constructor(private http: HttpClient) {}

  findCountry(term: string): Observable<Country[]> {
    const url = `${this.baseUrl}/name/${term}`;

    return this.http.get<Country[]>(url,{params:this.getParams});
  }
  findByCapital(term: string): Observable<Country[]> {
    const url = `${this.baseUrl}/capital/${term}`;

    return this.http.get<Country[]>(url);
  }

  findByCountryByCode(id: string): Observable<Country> {
    const url = `${this.baseUrl}/alpha/${id}`;

    return this.http.get<Country>(url);
  }

  findByRegion(region: string): Observable<Country[]> {
    const url = `${this.baseUrl}/region/${region}`;

    return this.http.get<Country[]>(url, { params:this.getParams }).pipe(tap(console.log));
  }
}
