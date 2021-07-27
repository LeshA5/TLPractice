import { Component, OnInit } from '@angular/core';
import {location} from "./location";
import { PredictWeatherService } from '../predict-weather.service';


@Component({
  selector: 'app-choise-location',
  templateUrl: './choise-location.component.html',
  styleUrls: ['./choise-location.component.css']
})

export class ChoiseLocationComponent implements OnInit {
  locations: location[] = [
    {  name: 'Kazan' },
    {  name: 'Cheboksary' },
    {  name: 'Medvedevo' },
    {  name: 'Yoshkar-Ola' },
    {  name: 'Surok' },
    {  name: 'Moscow' },
    {  name: 'Murmansk'}
  ];
  searchStr = ''
  CityName = ''
  forecasts: any = {};
  constructor(private predictWeatherService : PredictWeatherService) {}

  selectedLocation?: location;
  onSelect(place: location): void {
    this.selectedLocation = place;
  }

  getColor(tem: any){
    if (tem > 20)
      return 'red'
    else
      return 'blue'
  }
  onKeydown(){
    this.CityName = (document.getElementsByTagName('li')[0].innerHTML);
    for (var i = 0; i < this.locations.length; i++){
      if(this.locations[i].name == this.CityName){
        this.selectedLocation = this.locations[i];
        return
      }
    }
  }
  getForecast(): void {
    this.predictWeatherService.getForecast(this.selectedLocation?.name).subscribe(data => this.forecasts = data);
  }

  ngOnInit(): void {
  }


}
