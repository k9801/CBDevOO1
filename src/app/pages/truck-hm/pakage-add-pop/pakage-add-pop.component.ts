import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pakage-add-pop',
  templateUrl: './pakage-add-pop.component.html',
  styleUrls: ['./pakage-add-pop.component.scss']
})
export class PakageAddPopComponent {
  constructor(@Inject(MAT_DIALOG_DATA) data: any, public dialogRef: MatDialogRef<PakageAddPopComponent>,
  ){}
  afterAdd(){
    this.dialogRef.close()
  } 
}
