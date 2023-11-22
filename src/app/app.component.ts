import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  title = 'frontend';
  isMenu = false
  userBar = false
  constructor(private route : Router){}
  ngDoCheck(): void {
    let url = this.route.url
    if(url=='/user-profile')
    {
      this.userBar = true
    }
    else if(url=='/login' || url=='/register' )
    {
      this.isMenu=false
    }
    else {
      this.isMenu=true
      this.userBar=false
    }
  }

}
