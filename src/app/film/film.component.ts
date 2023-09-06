import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../swapi.service';
import { Character } from '../interface';



@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})

export class FilmComponent implements OnInit {
  characters: Character[] = [];

  constructor(private starWarsService: SwapiService) { }

  ngOnInit(): void {
    this.starWarsService.getData().subscribe((data: any) => {
      this.characters = data.results;
    });
  }
}