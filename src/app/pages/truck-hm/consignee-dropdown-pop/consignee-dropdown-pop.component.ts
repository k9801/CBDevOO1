import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-consignee-dropdown-pop',
  templateUrl: './consignee-dropdown-pop.component.html',
  styleUrls: ['./consignee-dropdown-pop.component.scss']
})
export class ConsigneeDropdownPopComponent {
  constructor(@Inject(MAT_DIALOG_DATA) data: any, public dialogRef: MatDialogRef<ConsigneeDropdownPopComponent>,
  ){}
  afterAdd(){
    this.dialogRef.close()
  }
}
