import { Component, OnInit, ElementRef, Injectable } from '@angular/core';
// import { SdiebarComponent } from '../sidebar/sidebar.component'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: {
    '(document:click)': 'onClick($event)',
  }
})
// @Injectable()
export class HeaderComponent implements OnInit {
  status: boolean = false;
  dropdownStatus: boolean = false;
  collapsedWindow: boolean = false;


  constructor(
    private _eref: ElementRef,
    // private sidebarcomponent: SdiebarComponent
  ) { }

  ngOnInit() {
  }

  //hamburgerIconToggle Function

  hamburgerIconToggle() {
    this.status = !this.status;
  }
  profileDropdownMenuToggle() {
    this.dropdownStatus = !this.dropdownStatus;
    // this.sidebarcomponent.collapsedWindow = this.collapsedWindow;
  }
  onClick() {
    if (!this._eref.nativeElement.contains(event.target)) {
      this.dropdownStatus = false;
    }
  }

}
