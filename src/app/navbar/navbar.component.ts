import { Component, OnInit } from '@angular/core';

import { FunctionsService } from '../functions.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private fs: FunctionsService) { }

  ngOnInit() {
  }

  adjustedScroll(el:string) {
  	return this.fs.adjustedScroll(el);
  }


}
