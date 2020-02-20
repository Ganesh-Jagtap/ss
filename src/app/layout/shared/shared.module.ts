import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SdiebarComponent } from './components/sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { HeadingsectionComponent } from './components/headingsection/headingsection.component';
// import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { SessionService } from './providers/session.service';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SdiebarComponent,
    // HeadingsectionComponent,
    // BreadcrumbsComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    SdiebarComponent,
    // HeadingsectionComponent,
    // BreadcrumbsComponent,
    FooterComponent
  ],
  providers: [
  ]
})
export class SharedModule {
  static forroot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        SessionService
      ]
    }
  }
}
