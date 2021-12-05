import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterComponent } from '@pages/filter/filter.component';
import { HomeComponent } from '@pages/home/home.component';
import { PlaceComponent } from '@pages/place/place.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'houses',
    pathMatch: 'full',
  },

  { path: 'houses', component: HomeComponent },
  { path: 'house/:nameHouse', component: PlaceComponent },
  { path: 'filter', component: FilterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
