import {Component, OnInit} from '@angular/core';
import {NavbarItemModel} from "../navbar/navbar-item.model";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  navbarItems!: NavbarItemModel[];

  constructor() {
  }

  ngOnInit(): void {

    this.navbarItems = [
      {label: 'Overview', routerLink: 'overview'},
      {label: 'Create', routerLink: 'create'},
    ]

  }

}
