import { Component } from '@angular/core';
import { Country } from '../../interfaces/Country';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styles: [],
})
export class CapitalComponent {
  constructor(private countryService: CountryService) {}
  term: string = '';
  Error: boolean = false;
  countries: Country[] = [];
  search(term: string) {
    this.Error = false;
    this.term = term;
    this.countryService.findByCapital(this.term).subscribe(
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
  }
}
