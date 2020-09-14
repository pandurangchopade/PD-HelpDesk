import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  emailid: any;
  password: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  btnLogin() {
    if (this.emailid == "panduchopade@gmail.com" && this.password == "123") {
      this.router.navigate(['/dashboard']);  // define your component where you want to go
    } else {
      alert("Invalid username or password")
    }
  }
}
