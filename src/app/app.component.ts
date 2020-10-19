import { Component } from '@angular/core';
import { Country } from './country'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'countries';
  country: Country = { name: "USA" };
  country2: Country = { name: "Mexico" };
  country3: Country = { name: "Canada" };
  countries = [];


  getCountries() {
    if (this.countries.length === 0) {
      this.countries = [this.country, this.country2, this.country3];
    }
    else {
      this.countries = [];
    }
  }
}