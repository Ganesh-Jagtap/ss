import { Component, OnInit } from '@angular/core';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faUserCog } from '@fortawesome/free-solid-svg-icons';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faPodcast } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faPenAlt } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SdiebarComponent implements OnInit {

  collapsedWindow: boolean = false;
  status: boolean = false;

  faChartBar = faChartBar;
  faUserTie = faUserTie;
  faBuilding = faBuilding;
  faUserFriends = faUserFriends;
  faUserCog = faUserCog;
  faCheckDouble = faCheckDouble;
  faEdit = faEdit;
  faPodcast = faPodcast;
  faEye = faEye;
  faPenAlt = faPenAlt;
  faTrashAlt = faTrashAlt;
  faSearch = faSearch;
  faChevronDown = faChevronDown;
  faSyncAlt = faSyncAlt;
  faCopyright = faCopyright;

  constructor() { }

  ngOnInit() {
  }

  // hamburgerIconToggle() {
  //   this.status = !this.status;
  //   this.collapsedWindow = !this.collapsedWindow;
  // }

}
