import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  url = 'https://restcountries.eu/rest/v2';

  constructor(private httpClient: HttpClient) { }

  getAllCountries(): Observable<Object[]> {
    return this.httpClient.get<Object[]>(this.url + '/all');
  }

  getCountriesByRegion(region: any) {
    return this.httpClient.get<Object[]>(this.url + '/region/' + region);
  }

  getCountriesBySearch(searchInput: any) {
    return this.httpClient.get<Object[]>(this.url + '/name/' + searchInput);
  }
}
