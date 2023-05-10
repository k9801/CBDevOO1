import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConsigneeDropdownPopComponent } from './consignee-dropdown-pop/consignee-dropdown-pop.component';
import { ConsignorDropDownPOpComponent } from './consignor-drop-down-pop/consignor-drop-down-pop.component';
import { DocketChallanPopComponent } from './docket-challan-pop/docket-challan-pop.component';
import { TruckNOPopComponent } from './truck-nopop/truck-nopop.component';
import { AgentBrokerPopComponent } from './agent-broker-pop/agent-broker-pop.component';
import { ItemAddPopComponent } from './item-add-pop/item-add-pop.component';
import { PakageAddPopComponent } from './pakage-add-pop/pakage-add-pop.component';

@Component({
  selector: 'app-truck-hm',
  templateUrl: './truck-hm.component.html',
  styleUrls: ['./truck-hm.component.scss']
})
export class TruckHMComponent {
  constructor(
    private dialog: MatDialog,){}

  truckNPop(){
    const dialogRef = this.dialog.open(TruckNOPopComponent,{ disableClose: true });
  }
  docketChallanPop(){
    const dialogRef = this.dialog.open(DocketChallanPopComponent,{ disableClose: true });
  }
  agentBrokerPop()
  {
    const DialogRef =this.dialog.open(AgentBrokerPopComponent,{disableClose:true})
  }
  consigneePop()
  {
    const DialogRef =this.dialog.open(ConsigneeDropdownPopComponent,{disableClose:true})
  }
  consingorPop()
  {
    const DialogRef =this.dialog.open(ConsignorDropDownPOpComponent,{disableClose:true})
  }
  itemAddPop()
  {
    const DialogRef =this.dialog.open(ItemAddPopComponent,{disableClose:true})
  }
  pakageAddPop()
  {
    const DialogRef =this.dialog.open(PakageAddPopComponent,{disableClose:true})
  }
}
