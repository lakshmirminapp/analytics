import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonService } from './common.service';
import { AppRoutingModule } from './app-routing.module';
import { DetailComponent } from './detail/detail.component';
import { ChartModule } from "primeng/primeng";
import { DropdownModule } from 'primeng/primeng';
import { CalendarModule } from 'primeng/primeng';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import {TreeModule} from 'primeng/primeng';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ChartModule,
    DropdownModule,
    CalendarModule,
    BsDropdownModule,
    MultiselectDropdownModule,
    TreeModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
