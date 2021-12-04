import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/services/interface/character';
import {CharacterService} from '@services/character.service'

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  @Input()character!: Character;
 

  constructor() { }

  ngOnInit(): void {
 
  }

 

}
