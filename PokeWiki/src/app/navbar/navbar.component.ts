import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AdminDataService } from '../services/admin-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isAdmin:boolean;
  constructor(public adminDataService: AdminDataService, private changeDetectorRef: ChangeDetectorRef) { }

  handleLogIn(){
    this.changeDetectorRef.detectChanges();
    this.adminDataService.setIsAdmin(true);
    this.isAdmin=true;
    this.changeDetectorRef.detectChanges();
    console.log(this.isAdmin);
  }
  handleLogOut(){
    this.changeDetectorRef.detectChanges();
    this.adminDataService.setIsAdmin(false);
    this.isAdmin=false;this.changeDetectorRef.detectChanges();
    console.log(this.handleLogOut)
  }

  ngOnInit(): void {
    this.isAdmin=this.adminDataService.getIsAdmin();
    console.log(this.isAdmin)
  }

}
