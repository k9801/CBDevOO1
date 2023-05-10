import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-value-pop-up',
  templateUrl: './add-value-pop-up.component.html',
  styleUrls: ['./add-value-pop-up.component.scss']
})
export class AddValuePopUpComponent {
constructor(@Inject(MAT_DIALOG_DATA) data: any, public dialogRef: MatDialogRef<AddValuePopUpComponent>,
){}
afterAdd(){
  this.dialogRef.close()
}
}
