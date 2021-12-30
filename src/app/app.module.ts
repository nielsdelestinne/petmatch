import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FeatPetOverviewComponent} from './feat-pet-overview/feat-pet-overview.component';
import {FeatPetDetailComponent} from './feat-pet-detail/feat-pet-detail.component';
import {FeatPetDateAppointmentComponent} from './feat-pet-date-appointment/feat-pet-date-appointment.component';
import {FeatPetCreateComponent} from './feat-pet-create/feat-pet-create.component';
import {LayoutModule} from "./ui-layout/layout.module";
import {HttpClientModule} from "@angular/common/http";
import { SortByFieldPipe } from './util-sort-by/sort-by-field.pipe';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    FeatPetOverviewComponent,
    FeatPetDetailComponent,
    FeatPetDateAppointmentComponent,
    FeatPetCreateComponent,
    SortByFieldPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
