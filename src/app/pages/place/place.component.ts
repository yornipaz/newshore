import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterService } from '@services/character.service';
import { Character } from '@services/interface/character';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {

  private pathHouse: string = "";
  characters:Array<Character>=[];

  endpoint: string = "/house/";
  constructor(private apiCharacterService: CharacterService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getEndpointHouse()
  }

  private getEndpointHouse() {
    this.pathHouse = this.route.snapshot.paramMap.get('nameHouse') || "";
    this.endpoint = this.endpoint.concat(this.pathHouse)
    this.getCharacters(this.endpoint);
    


  }
  private getCharacters(endpoint:string): void {

    this.apiCharacterService.getCharacters(endpoint).subscribe(data => {
      this.characters = [...this.characters, ...data];
      console.log(data);
     


    })
  }
}
