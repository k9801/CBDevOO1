import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { MatDialog } from '@angular/material/dialog';
import { TripDropdownComponent } from './trip-dropdown/trip-dropdown.component';
import { ExpensePopUPComponent } from './expense-pop-up/expense-pop-up.component';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss']
})
export class TripComponent {
  constructor(
    private dialog: MatDialog,){}

  newDynamic2 = {
    SNo:0,
    Date:Date,
    Remark: '',
    Amount: 0,
  };
  newDynamic = {
    SNo:0,
    Date:Date,
    Expenses:'',
    Remark: '',
    Amount: 0,
  };
  formData={
    tripTransTbl: [] as any,
    tripTransTbl2:[] as any
  }
  addRow() {
    this.newDynamic.SNo = this.formData.tripTransTbl.length + 1
    const b = { ...this.newDynamic };
    this.formData.tripTransTbl.push(b);
  }
  deleteRow(index: any) {
    if (this.formData.tripTransTbl.length == 0) {
    } else {
      this.formData.tripTransTbl.splice(index, 1);
      for (let i = 0; i < this.formData.tripTransTbl.length; i++) {
        const element = this.formData.tripTransTbl[i];
        element.SNo = i + 1;
      }
    }
  }
  resetSelection(select2: MatSelect) {
    select2.value = null;
  }
  
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  onInput3Change(input1:any,input2:any){
    input1.value=null;
    input2.value=null;
  }
  onInput1and2Change(input3:any)
  {
    input3.value=null;
  }
  openDialog() {
    const dialogRef = this.dialog.open(TripDropdownComponent,{ disableClose: true });
  }
  addRowTripTbl() {
    this.newDynamic2.SNo = this.formData.tripTransTbl2.length + 1
    const b = { ...this.newDynamic2 };
    this.formData.tripTransTbl2.push(b);
  }
  deleteRowTripTbl(index: any) {
    if (this.formData.tripTransTbl2.length == 0) {
    } else {
      this.formData.tripTransTbl2.splice(index, 1);
      for (let i = 0; i < this.formData.tripTransTbl2.length; i++) {
        const element = this.formData.tripTransTbl2[i];
        element.SNo = i + 1;
      }
    }
  }
  opendialogbox(){
    const dialogRef = this.dialog.open(ExpensePopUPComponent,{ disableClose: true });

  }
}
