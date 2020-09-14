import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pd-helpdesk';
  navigationFlag = true;
  constructor(private router: Router) {
    // if (location.pathname.indexOf("login") != -1 || location.pathname == "/") {
    //   this.navigationFlag = false;
    // }
    // this.router.navigate(['/dashboard']);  // define your component where you want to go
  }

}
