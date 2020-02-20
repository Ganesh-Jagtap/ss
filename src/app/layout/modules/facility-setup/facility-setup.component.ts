import { Component, OnInit } from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faPenAlt } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-facility-setup',
  templateUrl: './facility-setup.component.html',
  styleUrls: ['./facility-setup.component.scss']
})
export class FacilitySetupComponent implements OnInit {
  title = "Facility Setup";
  faEye = faEye;
  faPenAlt = faPenAlt;
  faTrashAlt = faTrashAlt;
  faSearch = faSearch;

  constructor() { }

  ngOnInit() {
  }

}
