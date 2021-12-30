import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {FooterComponent} from "./footer/footer.component";
import {PageComponent} from "./page/page.component";
import {RouterModule} from "@angular/router";
import { AlertMessageComponent } from './alert-message/alert-message.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    PageComponent,
    AlertMessageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PageComponent
  ]
})
export class LayoutModule { }
