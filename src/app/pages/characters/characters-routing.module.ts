import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilterComponent } from './filter/filter.component';
import { PlaceComponent } from './place/place.component';

const routes: Routes = [
  {
    path: 'house/:nameHouse',
    component: PlaceComponent,
  },
  { path: 'filter', component: FilterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharactersRoutingModule {}
