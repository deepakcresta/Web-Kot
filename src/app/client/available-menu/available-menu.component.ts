import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

@Component({
  selector: 'app-available-menu',
  templateUrl: './available-menu.component.html',
  styleUrls: ['./available-menu.component.scss'],
})
export class AvailableMenuComponent implements OnInit {
  routes: Routes = [{ path: '/order', component: AvailableMenuComponent }];

  constructor() {}

  ngOnInit(): void {}
}
