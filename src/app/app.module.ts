import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwipeCalculatorComponent } from './swipe-calculator/swipe-calculator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import {CommonModule, DatePipe} from "@angular/common";
import { TimeconversionPipe } from './timeconversion.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SwipeCalculatorComponent,
    TimeconversionPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
