import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CountryService } from '../country.service';

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

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.countries = [];
    this.menuChoice = "";
  }

  changeSelectionMethod(choice: string) {
    this.menuChoice = choice;
    this.sendNoCountries();
    if (choice === "All Countries") {
      this.getAllCountries();
    }
  }

  filterRegion(event: any) {
    this.countryService.getCountriesByRegion(event.value)
      .subscribe(response => {
        this.countries = response;
        this.countryEmitter.emit(this.countries);
      },
        () => {
          this.sendNoCountries();
        });
  }

  getAllCountries() {
    this.countryService.getAllCountries()
      .subscribe(response => {
        this.countries = response;
        this.countryEmitter.emit(this.countries);
      },
        () => {
          this.sendNoCountries();
        });
  }

  searchCountries(event: any) {
    if (!event.target.value) {
      this.sendNoCountries();
    }
    else {
      this.countryService.getCountriesBySearch(event.target.value)
        .subscribe(response => {
          this.countries = response;
          this.countryEmitter.emit(this.countries);
        },
          () => {
            this.sendNoCountries();
          });
    }
  }

  private sendNoCountries() {
    this.countries = [];
    this.countryEmitter.emit(this.countries);
  }
}
