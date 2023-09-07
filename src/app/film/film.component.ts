import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../swapi.service';
import { Film } from '../interfaceFilms';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})

export class FilmComponent implements OnInit {
  films: Film[] = [];

  constructor(private starWarsService: SwapiService) { }

  ngOnInit(): void {
    this.starWarsService.getDataFilm().subscribe((data: any) => {
      this.films = data.results;
    });
  }
}