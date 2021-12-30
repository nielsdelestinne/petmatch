import {Component, Input, OnInit} from '@angular/core';
import {NavbarItemModel} from "./navbar-item.model";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() navbarItems!: NavbarItemModel[];

  constructor() { }

  ngOnInit(): void {
  }

}
