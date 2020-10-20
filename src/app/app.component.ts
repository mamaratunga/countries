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

  constructor(private http: HttpClient) { }


  getCountries() {
    let obs = this.http.get('https://restcountries.eu/rest/v2/all');
    obs.subscribe((response) => {
      this.countries = response;
    });
  }
}