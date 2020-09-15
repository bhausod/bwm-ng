import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RentalModule } from './rental/rental.module';
//import { ActivatedRoute } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/rentals', pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RentalModule,
    //ActivatedRoute,
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
