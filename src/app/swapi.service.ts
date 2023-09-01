import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class SwapiService {
  private API_URL = 'https://swapi.dev/api/';

  constructor(private http: HttpClient) { }

  getPeople(): Observable<any> {
    return this.http.get(this.API_URL + 'people/');
  }
}
