import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterLayoutComponent } from './pages/master-layout/master-layout.component';
import { MaterialModule } from './pages/material/material.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MasterLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    MatDatepickerModule,
    NoopAnimationsModule

  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
