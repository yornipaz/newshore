import { Component, OnInit } from '@angular/core';

import { CharacterService } from '@services/character.service';
import { Character } from '@services/interface/character';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  search: string = '';

  characters: Character[] = [];
 
  optionFilter: string;
  options: string[];
  page: number = 0;
  items: number = 12;
  constructor(private api: CharacterService) {
    this.options = ['Select Filter','lastName','firstName','species','patronus','ancestry','yearOfBirth','hairColour','gender'];
    this.optionFilter = 'Select Filter';
  }

  ngOnInit(): void {
   
    this.getDataCharacter();
  }
  prevPage() {
    if (this.page > 0) {
      this.page -= this.items;
    }
  }
  nextPage() {
    this.page += this.items;
  }

  sendSearchFilter(search: string) {
    this.page=0;
    this.search = search;
  }
  private getDataCharacter(): void {
    this.api.getCharacters('').subscribe((data) => {
      this.characters = data;
    
     
    });
  }

}
