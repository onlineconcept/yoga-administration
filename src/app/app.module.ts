import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BsDropdownModule, TabsModule, BsDatepickerModule, PaginationModule, ButtonsModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';

import { appRoutes } from './routes';
import { TeachersComponent } from './teachers/teachers.component';
import { GuestsComponent } from './guests/guests.component';
import { CustomerStatusService } from 'src/_services/customer-status.service';
import { AlertifyService } from '../_services/alertify.service';
import { SettingsComponent } from './settings/settings.component';
import { CustomerStatusComponent } from './settings/customer-status/customer-status.component';
import { CategoryComponent } from './settings/category/category.component';
import { CategoryService } from 'src/_services/category.service';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      TeachersComponent,
      GuestsComponent,
      SettingsComponent,
      CustomerStatusComponent,
      CategoryComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      BsDropdownModule.forRoot(),
      BsDatepickerModule.forRoot(),
      ButtonsModule.forRoot(),
      PaginationModule.forRoot(),
      TabsModule.forRoot(),
      RouterModule.forRoot(appRoutes)
   ],
   providers: [
      CustomerStatusService,
      CategoryService,
      AlertifyService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
