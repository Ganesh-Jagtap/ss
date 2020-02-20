import { Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { FacilitySetupComponent } from './modules/facility-setup/facility-setup.component';


export const layoutroutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'facility-setup',
        component: FacilitySetupComponent
      }
    ]

  }
];

// @NgModule({
//   imports: [RouterModule.forRoot(layoutroutes)],
//   exports: [RouterModule]
// })
// export class LayoutRoutingModule { }
