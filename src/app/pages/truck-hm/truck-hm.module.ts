import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruckHMComponent } from './truck-hm.component';
import { RouterModule } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialModule } from '../material/material.module';
import { ConsignorDropDownPOpComponent } from './consignor-drop-down-pop/consignor-drop-down-pop.component';
import { ConsigneeDropdownPopComponent } from './consignee-dropdown-pop/consignee-dropdown-pop.component';
import { TruckNOPopComponent } from './truck-nopop/truck-nopop.component';
import { DocketChallanPopComponent } from './docket-challan-pop/docket-challan-pop.component';
import { AgentBrokerPopComponent } from './agent-broker-pop/agent-broker-pop.component';
import { ItemAddPopComponent } from './item-add-pop/item-add-pop.component';
import { PakageAddPopComponent } from './pakage-add-pop/pakage-add-pop.component';



@NgModule({
  declarations: [TruckHMComponent, ConsignorDropDownPOpComponent, ConsigneeDropdownPopComponent, TruckNOPopComponent, DocketChallanPopComponent, AgentBrokerPopComponent, ItemAddPopComponent, PakageAddPopComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path:'',component:TruckHMComponent}]),
    MatDatepickerModule,
    MatNativeDateModule,
    TextFieldModule,
    MatDialogModule,
    MaterialModule
  ]
})
export class TruckHMModule { }
