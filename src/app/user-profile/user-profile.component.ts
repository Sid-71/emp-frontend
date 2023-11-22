import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userData: any;

  constructor(private userDataService: SharedService) {}

  ngOnInit(): void {
    this.userData = this.userDataService.getUserData();
    console.log("userData",this.userData);
  }
}
