import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-docket-challan-pop',
  templateUrl: './docket-challan-pop.component.html',
  styleUrls: ['./docket-challan-pop.component.scss']
})
export class DocketChallanPopComponent {
  constructor(@Inject(MAT_DIALOG_DATA) data: any, public dialogRef: MatDialogRef<DocketChallanPopComponent>,
  ){}
  afterAdd(){
    this.dialogRef.close()
  }
}
