import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { layoutroutes } from './layout.routes';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { SharedService } from './shared/shared.service'
import { SharedModule } from './shared/shared.module'


@NgModule({
  declarations: [
    LayoutComponent,

  ],
  imports: [
    RouterModule.forRoot(layoutroutes),
    CommonModule,
    FormsModule,
    BrowserModule,
    MaterialModule,
    SharedModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
