import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TrainingComponent } from './training/training.component';
import { CompanyComponent } from './company/company.component';
import { ContactComponent } from './contact/contact.component';
import { TraformComponent } from './traform/traform.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'training/:name', component: TraformComponent },
  {path:'training',component:TrainingComponent},
  {path:'company',component:CompanyComponent},
  {path:'contact',component:ContactComponent},
  {path:'details',component:DetailsComponent},
  { path: 'training/traform/:name', component: TraformComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
