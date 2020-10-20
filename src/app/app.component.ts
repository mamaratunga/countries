import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Country } from './country'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'countries';
  countries;
  regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  selectedCountry;

  constructor(private http: HttpClient) { }

  filterRegion(event: any) {
    let obs = this.http.get('https://restcountries.eu/rest/v2/region/' + event.target.value);
    obs.subscribe((response) => {
      this.countries = response;
    });
  }

  getAllCountries() {
    let obs = this.http.get('https://restcountries.eu/rest/v2/all');
    obs.subscribe((response) => {
      this.countries = response;
    });
  }

  searchCountries(event: any) {
    let obs = this.http.get('https://restcountries.eu/rest/v2/name/' + event.target.value);
    obs.subscribe((response) => {
      this.countries = response;
    });
  }

  selectCountry(event: any) {
    this.selectedCountry = event;
  }
}