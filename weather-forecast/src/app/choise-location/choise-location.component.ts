import { Component, OnInit } from '@angular/core';
import {Location} from "./location";
import { Forecast, PredictWeatherService } from '../predict-weather.service';


@Component({
  selector: 'app-choise-location',
  templateUrl: './choise-location.component.html',
  styleUrls: ['./choise-location.component.css']
})

export class ChoiseLocationComponent implements OnInit {
  locations: Location[] = [
    { id: '1', name: 'Kazan' },
    { id: '1', name: 'Cheboksary' },
    { id: '1', name: 'Medvedevo' },
    { id: '2', name: 'Yoshkar-Ola' },
    { id: '2', name: 'Surok' },
    { id: '2', name: 'Moscow' },
    { id: '2', name: 'Murmansk'}
  ];

  searchStr = 'Kaz';

  forecasts?: Forecast;

  constructor(private predictWeatherService : PredictWeatherService) {}

  selectedLocation?: Location;

  fillForecasts(data: any)
  {
    this.forecasts = data;
  }

  onSelect(place: Location): void {
    this.selectedLocation = place;
  }
  getColor(tem: any){
    if (tem > 20)
      return 'red'
    else
      return 'blue'
  }

  getForecast(): void {
    this.predictWeatherService.getForecast(this.selectedLocation?.name).subscribe(data => { this.fillForecasts(data); console.log(this.forecasts?.main?.feels_like);
     });
  }

  ngOnInit(): void {    
  }


}
