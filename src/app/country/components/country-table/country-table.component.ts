import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/Country';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',

})
export class CountryTableComponent implements OnInit {
   
  @Input() countries:Country[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
