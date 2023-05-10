import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripComponent } from './trip.component';
import { RouterModule } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialModule } from '../material/material.module';
import { TripDropdownComponent } from './trip-dropdown/trip-dropdown.component';
import { ExpensePopUPComponent } from './expense-pop-up/expense-pop-up.component';
import { AddValuePopUpComponent } from './add-value-pop-up/add-value-pop-up.component';



@NgModule({
  declarations: [TripComponent, TripDropdownComponent, ExpensePopUPComponent, AddValuePopUpComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path:'',component:TripComponent}]),
    MatDatepickerModule,
    MatNativeDateModule,
    TextFieldModule,
    MatDialogModule,
    MaterialModule
  ]
})
export class TripModule { }
