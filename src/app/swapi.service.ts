import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



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

  result: string = " ";
  variable: any;

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

  searchMethod(name: string): Observable<string> {
    return this.http.get(this.people).pipe(map((data: any) => {
        for (let i = 0; i < data.results.length; i++) {
          if (data.results[i].name == name) {
            return data.results[i].name; // Gefundener Name wird zurückgegeben
          }
        }
        throw new Error("Ihr Begriff wurde nicht gefunden"); // Fehler, wenn der Name nicht gefunden wird
      })
    );
  }
}
