import { Component, OnInit } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.scss'],
})
export class SubMenuComponent implements OnInit {
  routes: Routes = [{ path: 'add-momo', 
  component: SubMenuComponent }];

  constructor() {}

  ngOnInit(): void {}
}
