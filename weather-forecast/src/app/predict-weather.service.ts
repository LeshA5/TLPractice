import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class MainInfo {
  temp?: number;
  feels_like?: number;
}

export class Forecast {
    main?: MainInfo;
}

@Injectable({
  providedIn: 'root'
})

export class PredictWeatherService {
  constructor(private http: HttpClient) {}
  getForecast(city?: string): Observable<Forecast> {
    return this.http.get<Forecast>('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=75c605720f058a5b8f807e00252375fc&units=metric');
  }
}
