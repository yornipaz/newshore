import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';


import { CharactersRoutingModule } from './characters-routing.module';
import { FilterComponent } from './filter/filter.component';
import { PlaceComponent } from './place/place.component';
import { CharacterComponent } from './components/character/character.component';
import { FilterCharactersPipe } from 'src/app/pipes/filter-characters.pipe';
import { FormsModule } from '@angular/forms';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';


@NgModule({
  imports: [CharactersRoutingModule, CommonModule, FormsModule],
  declarations: [
    FilterComponent,
    PlaceComponent,
    CharacterComponent,
    FilterCharactersPipe,
  
    SearchFilterComponent,
  ],
})
export class CharactersModule {}
