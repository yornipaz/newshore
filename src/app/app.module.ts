
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from '@components/header/header.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent,HeaderComponent],
 
  imports: [AppRoutingModule,BrowserModule,  HttpClientModule, CommonModule],
  providers: [HttpClientModule,BrowserModule,AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
