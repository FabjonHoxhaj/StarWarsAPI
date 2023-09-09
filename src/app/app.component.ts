import { Component, OnInit } from '@angular/core';
import { SwapiService } from './swapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StarWarsAPI';

  constructor(private swapi: SwapiService) {}

  inputValue: any  = [];

  ngOnInit(): void {
    this.swapi.getData().subscribe((data: any)=> {
    this.inputValue = data.results[0];
    });
  }

}
