import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CountryDialogComponent } from '../country-dialog/country-dialog.component';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  @Input() countries;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  selectCountry(event: any) {
    this.dialog.open(CountryDialogComponent, { data: event });
  }

}
