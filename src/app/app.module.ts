import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CompanyComponent } from './company/company.component';
import { ContactComponent } from './contact/contact.component';
import { TrainingComponent } from './training/training.component';
import { TraformComponent } from './traform/traform.component';
import { DetailsComponent } from './details/details.component';

import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { TrainingMaterialComponent } from './training-material/training-material.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompanyComponent,
    ContactComponent,
    TrainingComponent,
    TraformComponent,
    DetailsComponent,
    TrainingMaterialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  // Make sure AppRoutingModule is imported here
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
