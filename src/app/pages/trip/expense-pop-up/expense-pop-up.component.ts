import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddValuePopUpComponent } from '../add-value-pop-up/add-value-pop-up.component';

@Component({
  selector: 'app-expense-pop-up',
  templateUrl: './expense-pop-up.component.html',
  styleUrls: ['./expense-pop-up.component.scss']
})
export class ExpensePopUPComponent {
  constructor(@Inject(MAT_DIALOG_DATA) data: any, public dialogRef: MatDialogRef<ExpensePopUPComponent>,
  private dialog: MatDialog,){}
  AddNewValue(){
    const dialogRef = this.dialog.open(AddValuePopUpComponent,{ disableClose: false });
  }
  AfterSelect() {
    // this.formData.tripTransTbl.push();
    // this.router.navigate(['/trip']);
    this.dialogRef.close()
  }
}
