import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit {
 
  @Output() search= new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  onSearch(search: string) {
   
    this.search.emit(search);
  }
}
