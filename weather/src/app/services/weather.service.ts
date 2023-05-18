import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  options: string = "en-US";

  constructor(private http: HttpClient) { }

  fetchData() {
    const url = 'https://weather338.p.rapidapi.com/locations/search?query=Auckland&language=en-US';
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': '70e0ba6637mshe88887e1222b9c4p1446fbjsnaa1dea951a86',
      'X-RapidAPI-Host': 'weather338.p.rapidapi.com'
    });

    this.http.get(url, { headers }).subscribe(result => {
      console.log(result);
    }, error => {
      console.error(error);
    });
  }
}