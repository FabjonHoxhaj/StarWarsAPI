import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class SwapiService {
  private API_URL = 'https://swapi.dev/api/';

  private people = 'https://swapi.dev/api/people/';
  private planets = 'https://swapi.dev/api/planets/';
  private films = 'https://swapi.dev/api/films/';
  private species = 'https://swapi.dev/api/species/';
  private vehicles = 'https://swapi.dev/api/vehicles/';
  private starships = 'https://swapi.dev/api/starships/';

  constructor(private http: HttpClient) { }

  getDataPeople(): Observable<any> {
    return this.http.get('https://swapi.dev/api/people?page');
  }

  getDataFilm(): Observable<any> {
    return this.http.get(this.API_URL + 'films/');
  }

  getDataPlanets(): Observable<any> {
    return this. http.get(this.API_URL + 'planets/');
  }

  getSingleData(): Observable<any> {
    return this.http.get(this.API_URL + 'planets/');
  }

  searchMethod(name: any): Observable<any> {
    let test: any = this.http.get(this.API_URL + 'planets/' + '?search=' + name);
    return test;
  }
}
