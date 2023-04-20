import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsComponent } from './contact-us.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SubMenuComponent } from '../client/menu/sub-menu/sub-menu.component';


@NgModule({
  declarations: [
    ContactUsComponent,
    SubMenuComponent
  ],
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ContactUsModule { }
