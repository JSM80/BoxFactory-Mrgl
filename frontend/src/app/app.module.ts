import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { HomeComponent } from './home.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {CardComponent} from './card/card.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [HomeComponent, NavBarComponent, CardComponent],
  imports: [BrowserModule, IonicModule.forRoot({mode:"ios"}), AppRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [HomeComponent],
})
export class AppModule {}
