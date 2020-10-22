import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-get-countries-menu',
  templateUrl: './get-countries-menu.component.html',
  styleUrls: ['./get-countries-menu.component.css']
})
export class GetCountriesMenuComponent implements OnInit {
  @Output() countryEmitter = new EventEmitter<object>();
  countries;
  regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  menuChoice;
  menuChoices = ["All Countries", "Filter By Region", "Search"]

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.countries = [];
    this.menuChoice = "";
  }

  changeSelectionMethod(choice: string) {
    this.menuChoice = choice;
    this.countries = [];
    this.countryEmitter.emit(this.countries);
    if (choice === "All Countries") {
      this.getAllCountries();
    }
  }

  filterRegion(event: any) {
    let obs = this.http.get('https://restcountries.eu/rest/v2/region/' + event.value);
    obs.subscribe((response) => {
      this.countries = response;
      this.countryEmitter.emit(this.countries);
    });
  }

  getAllCountries() {
    let obs = this.http.get('https://restcountries.eu/rest/v2/all');
    obs.subscribe((response) => {
      this.countries = response;
      this.countryEmitter.emit(this.countries);
    });
  }

  searchCountries(event: any) {
    if (!event.target.value) {
      this.countries = [];
      this.countryEmitter.emit(this.countries);
    }
    else {
      let obs = this.http.get('https://restcountries.eu/rest/v2/name/' + event.target.value);
      obs.subscribe((response) => {
        this.countries = response;
        this.countryEmitter.emit(this.countries);
      });
    }
  }
}
