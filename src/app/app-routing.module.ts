import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FeatPetOverviewComponent} from "./feat-pet-overview/feat-pet-overview.component";
import {FeatPetDetailComponent} from "./feat-pet-detail/feat-pet-detail.component";
import {FeatPetCreateComponent} from "./feat-pet-create/feat-pet-create.component";
import {FeatPetDateAppointmentComponent} from "./feat-pet-date-appointment/feat-pet-date-appointment.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: "overview"},
  {path: 'overview', component: FeatPetOverviewComponent},
  {path: 'detail/:petId', component: FeatPetDetailComponent},
  {path: 'create', component: FeatPetCreateComponent},
  {path: 'date-appointment', component: FeatPetDateAppointmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
