import { TestBed } from '@angular/core/testing';

import { PredictWeatherService } from './predict-weather.service';

describe('PredictWeatherService', () => {
  let service: PredictWeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PredictWeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
