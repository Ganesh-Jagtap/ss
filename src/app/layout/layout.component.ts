import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared/shared.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  providers: [SharedService]
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
