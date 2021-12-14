import { Component, Input, OnInit } from '@angular/core';

import { House } from '@services/interface/house';

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
