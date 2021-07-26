import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChoiseLocationComponent } from './choise-location/choise-location.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import {PredictWeatherService} from "./predict-weather.service";
import {SearchPipe} from "./choise-location/search.pipe";

@NgModule({
  declarations: [
    AppComponent,
    ChoiseLocationComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PredictWeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
