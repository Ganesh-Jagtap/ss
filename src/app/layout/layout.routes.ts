import { Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { FacilitySetupComponent } from './modules/facility-setup/facility-setup.component';
import { UserListComponent } from './modules/user-list/user-list.component';


export const layoutroutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'facility-setup',
        component: FacilitySetupComponent
      },
      {
        path: 'user-list',
        component: UserListComponent
      }
    ]

  }
];

// @NgModule({
//   imports: [RouterModule.forRoot(layoutroutes)],
//   exports: [RouterModule]
// })
// export class LayoutRoutingModule { }
