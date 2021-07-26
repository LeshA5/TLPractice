import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class PredictWeatherService {

  constructor(private http: HttpClient) {}
  getForecast(city?: string){
    return this.http.get<object>('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=75c605720f058a5b8f807e00252375fc&units=metric');
  }
}
