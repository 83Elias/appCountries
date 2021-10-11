import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/Country';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [ 
    `
    button{
      margin-right:5px;
    }
    `
  ]
})
export class ByRegionComponent implements OnInit {
  
  region:string[]=['africa','americas','asia','europe'];
  activeRegion:string='';
  countries:Country[]=[];

  constructor(private CountryService:CountryService) { }
  
  ngOnInit(): void {
  }
  
  activedRegion(region:string){
      console.log(region);
      
    if (region=== this.activeRegion) {return;}
    this.activeRegion=region;
    this.countries=[];
    this.CountryService.findByRegion(region)
    .subscribe(countries=>this.countries=countries)
  }

  getClassCss(region:string):string{
    
  return (region===this.activeRegion?'btn btn-primary':'btn btn-outline-primary');
  }
}
