import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { layoutroutes } from './layout.routes';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { SharedModule } from './shared/shared.module';
// import { DataService } from "./services/data.service";
// import { AddDialogComponent } from "./dialogs/add/add.dialog.component";
// import { EditDialogComponent } from "./dialogs/edit/edit.dialog.component";
// import { DeleteDialogComponent } from "./dialogs/delete/delete.dialog.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";
import { ModulesModule } from './modules/modules.module';

@NgModule({
  declarations: [
    LayoutComponent

  ],
  imports: [
    RouterModule.forRoot(layoutroutes),
    CommonModule,
    FormsModule,
    BrowserModule,
    MaterialModule,
    SharedModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ModulesModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
