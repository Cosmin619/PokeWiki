import { Component, OnInit } from '@angular/core';
import { AdminDataService } from '../services/admin-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public adminDataService: AdminDataService) { }

  ngOnInit(): void {
  }

}
