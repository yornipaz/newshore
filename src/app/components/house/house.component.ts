import { Component, Input, OnInit } from '@angular/core';
import { CharacterService } from '@services/character.service';
import { House } from '@services/interface/house';
import { Houses } from '../../pages/home/data/houses';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss'],
})
export class HouseComponent implements OnInit {
  @Input() house!: House;

  constructor() {}

  ngOnInit(): void {}
}
