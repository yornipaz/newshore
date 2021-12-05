import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  //filterCharacter: Character[] = [];
  optionFilter: string;
  options: string[];
  page: number = 0;
  items: number = 12;
  constructor(private api: CharacterService) { //, private route: ActivatedRoute
    this.options = ['Select Filter','lastName','firstName','species','patronus','ancestry','yearOfBirth','hairColour','gender'];
    this.optionFilter = 'Select Filter';
  }

  ngOnInit(): void {
    //this.getQuerySearch();
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
 /** private getQuerySearch(): void {
    this.route.queryParams.subscribe((params) => {
      this.search = params['search'];

      //this.filterCharacterByQuery(this.search);
    });
  } */
  onSearch(search: string) {
    this.page=0;
    this.search = search;
  }
  private getDataCharacter(): void {
    this.api.getCharacters('').subscribe((data) => {
      this.characters = data;
      //this.filterCharacter = data;
     
    });
  }
  /**
  private filterCharacterByQuery(query: string): void {
    let filterCharacter = this.api.filterCharacterByQuery(
      query,
      this.characters
    );

    this.filterCharacter =
      filterCharacter.length > 0 ? filterCharacter : this.characters;
    console.log(filterCharacter);
  } */
}
