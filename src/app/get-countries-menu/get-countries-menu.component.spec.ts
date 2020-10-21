import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCountriesMenuComponent } from './get-countries-menu.component';

describe('GetCountriesMenuComponent', () => {
  let component: GetCountriesMenuComponent;
  let fixture: ComponentFixture<GetCountriesMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCountriesMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCountriesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
