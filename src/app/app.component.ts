import { Component, OnInit } from '@angular/core';
import { SwapiService } from './swapi.service';
import { Search } from './interfaceSearch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StarWarsAPI';

  constructor(private swapi: SwapiService) {}

  value: any  = [];
  inputValue: any;

  ngOnInit(): void {
    this.swapi.getSingleData().subscribe((data: any)=> {
    this.value = data.results[1];
    });
  }

  inputUser(event: any) {
    this.swapi.searchMethod(event);
    console.log(this.inputValue);
  }

}
