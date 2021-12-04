import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '@services/character.service';
import { Character } from '@services/interface/character';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  querySearch: string = "";
  alertShow: boolean = false;
  private characters: Character[] = [];
  filterCharacter: Character[] = [];
  constructor(private api: CharacterService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getQuerySearch();
    this.getDataCharacter();

  }
  private getQuerySearch(): void {
    this.route.queryParams.subscribe(params => {
      this.querySearch = params['search'];

      this.filterCharacterByQuery(this.querySearch)



    });

  }
  private getDataCharacter(): void {
    this.api.getCharacters("").subscribe(data => {
      this.characters = data
      this.filterCharacter = data


    })
  }


  private filterCharacterByQuery(query: string): void {

    
    let filterCharacter = this.api.filterCharacterByQuery(query,this.characters);
    if (!filterCharacter.length){ 
    alert(`El personaje buscado por el query de :${query} ,no se ha podido encontrar`)
    }
    this.filterCharacter = filterCharacter.length > 0 ? filterCharacter : this.characters
 


  }


}
