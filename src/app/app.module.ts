import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PlaceComponent } from './pages/place/place.component';
import { CharacterComponent } from './components/character/character.component';
import { SearchComponent } from './components/search/search.component';
import { HouseComponent } from './components/house/house.component';
import { FilterCharacterComponent } from './components/filter-character/filter-character.component';
import { HomeComponent } from './pages/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlaceComponent,
    CharacterComponent,
    SearchComponent,
    HouseComponent,
    FilterCharacterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
