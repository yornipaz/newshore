import { Component, OnInit } from '@angular/core';
import {CharacterService}from '@services/character.service';
import { House } from '@services/interface/house';
import {Houses} from './data/houses'

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent implements OnInit {
  houses:Array<House>;

  constructor(private api:CharacterService) { 
    this.houses=Houses;
    this.counterHouseMember(this.housePaths(this.houses));
  }

  ngOnInit(): void {
  }
  private counterHouseMember(nameHouse: string[]) {
    nameHouse.forEach((name, index) => {
      let pathHouse:string = '/house/'.concat(name)
      this.api.getCharacters(pathHouse).subscribe((res) => {
        this.houses[index].members = res.length
      });

    })

  }

  private housePaths(houses: House[]): string[] {
    let nameHouse = houses.map(houses => houses.name);

    return nameHouse;

  }
}
