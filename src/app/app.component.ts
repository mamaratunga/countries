import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'countries';
  countries;

  constructor() { }

  updateCountries(event: any) {
    this.countries = event;
  }
}