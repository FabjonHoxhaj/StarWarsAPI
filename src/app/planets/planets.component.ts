import { Component, OnInit } from '@angular/core';
import { Planets } from '../interfacePlanets';
import { SwapiService } from '../swapi.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  planets: Planets[] = [];

  constructor(private swapiService: SwapiService) {}

  ngOnInit(): void {
    this.swapiService.getDataPlanets().subscribe((data: any) => {
      this.planets = data.results;
    })
  }
}
