import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trip-dropdown',
  templateUrl: './trip-dropdown.component.html',
  styleUrls: ['./trip-dropdown.component.scss']
})
export class TripDropdownComponent {
  constructor(@Inject(MAT_DIALOG_DATA) data: any, public dialogRef: MatDialogRef<TripDropdownComponent>,
  private readonly router: Router,){}
  formData={
    tripTransTbl: [] as any,
    tripTransTbl2:[] as any
  }
  newDynamic = {
    SNo:0,
    Date:Date,
    Expenses:'',
    Remark: '',
    Amount: 0,
  };
  ngOnInit(): void {
    this.thisButton()
  } 
  thisButton(){
    this.newDynamic.SNo = this.formData.tripTransTbl.length + 1
    const b = { ...this.newDynamic };
    this.formData.tripTransTbl.push(b);
  }
  deleteRow(index: any) {
    if (this.formData.tripTransTbl.length == 1) {
    } else {
      this.formData.tripTransTbl.splice(index, 1);
      for (let i = 0; i < this.formData.tripTransTbl.length; i++) {
        const element = this.formData.tripTransTbl[i];
        element.SNo = i + 1;
      }
    }
  }
  onClick() {
    this.formData.tripTransTbl.push();
    this.router.navigate(['/trip']);
    this.dialogRef.close()
  }
}
