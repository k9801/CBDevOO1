import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'Trip',
    loadChildren: () => import('./pages/trip/trip.module').then(m => m.TripModule),
  },
  {
    path: 'TruckHM',
    loadChildren: () => import('./pages/truck-hm/truck-hm.module').then(m => m.TruckHMModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
