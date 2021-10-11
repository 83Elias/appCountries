import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/Country';
@Component({
  selector: 'app-show-country',
  templateUrl: './show-country.component.html',
})
export class ShowCountryComponent implements OnInit {
  country!: Country;
  constructor(
    private activateRoute: ActivatedRoute,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    this.activateRoute.params
      .pipe(
        switchMap(({ id }) => this.countryService.findByCountryByCode(id)),
        tap(console.log)
        )
        /* Api rest  in v3.1 return one array  */
      .subscribe((country) => this.country = country[0]);
  }
}
