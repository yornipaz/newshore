import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PlaceComponent } from './pages/place/place.component';
import { CharacterComponent } from './components/character/character.component';
import { SearchComponent } from './components/search/search.component';
import { HouseComponent } from './components/house/house.component';

import { HomeComponent } from './pages/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterComponent } from './pages/filter/filter.component';
import { CommonModule } from '@angular/common';
import { FilterCharactersPipe } from './pipes/filter-characters.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlaceComponent,
    CharacterComponent,
    SearchComponent,
    HouseComponent,
    
    HomeComponent,
    FilterComponent,
    FilterCharactersPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
