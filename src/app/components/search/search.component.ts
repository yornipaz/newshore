import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onSearch(search: string) {
    if (search && search.length >= 2) {
      this.router.navigate(['filter'], { queryParams: { search: search } });
     
    }
  }
}
