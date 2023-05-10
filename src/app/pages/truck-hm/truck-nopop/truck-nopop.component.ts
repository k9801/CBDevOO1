import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-truck-nopop',
  templateUrl: './truck-nopop.component.html',
  styleUrls: ['./truck-nopop.component.scss']
})
export class TruckNOPopComponent {
  constructor(@Inject(MAT_DIALOG_DATA) data: any, public dialogRef: MatDialogRef<TruckNOPopComponent>,
  ){}
  afterAdd(){
    this.dialogRef.close()
  }
}
