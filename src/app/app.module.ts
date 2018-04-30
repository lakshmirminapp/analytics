import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ChartModule, DropdownModule, CalendarModule} from 'primeng/primeng';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonService } from './common.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ChartModule,
    DropdownModule,
    CalendarModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
