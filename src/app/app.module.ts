import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmComponent } from './film/film.component';
import { PlanetsComponent } from './planets/planets.component';
import { PeopleComponent } from './people/people.component';


@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    PlanetsComponent,
    PeopleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
