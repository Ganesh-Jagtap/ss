import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SdiebarComponent } from './components/sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    HeaderComponent,
    SdiebarComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    SdiebarComponent,
  ]
})
export class SharedModule { }
