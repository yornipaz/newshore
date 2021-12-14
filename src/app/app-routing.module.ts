import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'houses',
    pathMatch: 'full',
  },

  {
    path: 'houses',
    loadChildren: () =>
      import('@pages/houses/houses.module').then((m) => m.HousesModule),
  },
  { path: 'characters', loadChildren: () =>
  import('@pages/characters/characters.module').then((m) => m.CharactersModule), },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
