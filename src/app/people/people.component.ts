import { Component, OnInit } from '@angular/core';
import { People } from '../interfacePeople';
import { SwapiService } from '../swapi.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  peoples: People[] = [];
  constructor(private starWarsService: SwapiService) { }

  ngOnInit(): void {
    this.starWarsService.getDataPeople().subscribe((data: any) => {
      this.peoples = data.results;
    });
  }

}
