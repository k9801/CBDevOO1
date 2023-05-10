import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-consignor-drop-down-pop',
  templateUrl: './consignor-drop-down-pop.component.html',
  styleUrls: ['./consignor-drop-down-pop.component.scss']
})
export class ConsignorDropDownPOpComponent {
  constructor(@Inject(MAT_DIALOG_DATA) data: any, public dialogRef: MatDialogRef<ConsignorDropDownPOpComponent>,
  ){}
  afterAdd(){
    this.dialogRef.close()
  }
}
