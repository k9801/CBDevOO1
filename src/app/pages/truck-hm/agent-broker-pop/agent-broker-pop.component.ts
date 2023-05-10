import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-agent-broker-pop',
  templateUrl: './agent-broker-pop.component.html',
  styleUrls: ['./agent-broker-pop.component.scss']
})
export class AgentBrokerPopComponent {
  constructor(@Inject(MAT_DIALOG_DATA) data: any, public dialogRef: MatDialogRef<AgentBrokerPopComponent>,
  ){}
  afterAdd(){
    this.dialogRef.close()
  }
}
