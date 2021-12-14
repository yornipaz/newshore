import { NgModule } from '@angular/core';


import { HousesRoutingModule } from './houses-routing.module';
import { HomeComponent } from './home/home.component';
import { HouseComponent } from '@pages/houses/home/components/house/house.component';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [HousesRoutingModule, CommonModule],
  declarations: [HomeComponent, HouseComponent],
})
export class HousesModule {}
