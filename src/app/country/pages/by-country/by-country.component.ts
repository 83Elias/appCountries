import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/Country';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class ByCountryComponent {
  constructor(private countryService: CountryService) {}
  term: string = '';
  Error: boolean = false;
  countries: Country[] = [];

  suggestedCountries: Country[] = [];

  search(term: string) {
    this.Error = false;
    this.term = term;
    this.countryService.findCountry(this.term).subscribe(
      (res) => {
        console.log(res);

        this.countries = res;
      },
      (err) => {
        this.Error = true;
        this.countries = [];
      }
    );
  }

  suggestions(term: string) {
    this.Error = false;
    this.countryService.findCountry(term).subscribe((countries) => this.suggestedCountries=countries.splice(0,5));
  }
}
