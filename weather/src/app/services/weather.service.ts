import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '27a182a422624b1889f200734232305';

  constructor(private http: HttpClient) {}

  getWeatherData(location: string): Observable<WeatherData> {
    const apiUrl = 'http://api.weatherapi.com/v1/current.json';
    const aqi = 'no';

    const url = `${apiUrl}?key=${this.apiKey}&q=${location}&aqi=${aqi}`;
    
    return this.http.get<WeatherData>(url);
  }
}