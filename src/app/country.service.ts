import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  url = 'https://restcountries.eu/rest/v2';

  constructor(private httpClient: HttpClient) { }

  getAllCountries(): Observable<Object[]> {
    return this.httpClient.get<Object[]>(this.url + '/all')
      .pipe(catchError(this.handleError));;
  }

  getCountriesByRegion(region: any): Observable<Object[]> {
    return this.httpClient.get<Object[]>(this.url + '/region/' + region)
      .pipe(catchError(this.handleError));;
  }

  getCountriesBySearch(searchInput: any): Observable<Object[]> {
    return this.httpClient.get<Object[]>(this.url + '/name/' + searchInput)
      .pipe(catchError(this.handleError));
  }

  private handleError() {
    return throwError("No countries found");
  }
}
