import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class SwapiService {
  private API_URL = 'https://swapi.dev/api/';

  constructor(private http: HttpClient) { }

  getDataPeople(): Observable<any> {
    return this.http.get(this.API_URL + 'people/');
  }

  getDataFilm(): Observable<any> {
    return this.http.get(this.API_URL + 'films/');
  }

  getDataPlanets(): Observable<any> {
    return this. http.get(this.API_URL + 'planets/');
  }
}
