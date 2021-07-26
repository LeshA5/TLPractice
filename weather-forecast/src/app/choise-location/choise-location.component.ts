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
    { id: '1', name: 'Kazan' },
    { id: '1', name: 'Cheboksary' },
    { id: '1', name: 'Medvedevo' },
    { id: '2', name: 'Yoshkar-Ola' },
    { id: '2', name: 'Surok' },
    { id: '2', name: 'Moscow' },
    { id: '2', name: 'Murmansk'}
  ];

  searchStr = ''

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
  getForecast(): void {
    this.predictWeatherService.getForecast(this.selectedLocation?.name).subscribe(data => this.forecasts = data);
  }
  ngOnInit(): void {
  }


}
