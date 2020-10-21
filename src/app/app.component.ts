import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CountryDialogComponent } from './country-dialog/country-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'countries';
  countries;

  constructor(public dialog: MatDialog) { }

  listCountries(event: any) {
    this.countries = event;
  }

  selectCountry(event: any) {
    this.dialog.open(CountryDialogComponent, { data: event });
  }
}