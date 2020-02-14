import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';


export const layoutroutes: Routes = [
  {
    path: '',
    component: LayoutComponent

  }
];

// @NgModule({
//   imports: [RouterModule.forRoot(layoutroutes)],
//   exports: [RouterModule]
// })
// export class LayoutRoutingModule { }
