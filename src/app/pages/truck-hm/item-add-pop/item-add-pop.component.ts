import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-item-add-pop',
  templateUrl: './item-add-pop.component.html',
  styleUrls: ['./item-add-pop.component.scss']
})
export class ItemAddPopComponent {
  constructor(@Inject(MAT_DIALOG_DATA) data: any, public dialogRef: MatDialogRef<ItemAddPopComponent>,
  ){}
  afterAdd(){
    this.dialogRef.close()
  }
}
