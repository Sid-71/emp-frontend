import { Component, OnInit, ɵsetAlternateWeakRefImpl } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private builder: FormBuilder, private toastr: ToastrService, private service: SharedService,
    private router: Router) {
      sessionStorage.clear();

  }
  result: any;

  loginform = this.builder.group({
    email: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required)
  });

  proceedlogin() {
    console.log("login data",this.loginform.value)
    if (this.loginform.valid) {
      this.service.loginEmployee(this.loginform.value).subscribe(item => {
        this.result = item;
        if (this.result.password === this.loginform.value.password) {
          if (this.result.isAdmin) {
            sessionStorage.setItem('EmployeeId',this.result.EmployeeId);
            sessionStorage.setItem('isAdmin',this.result.isAdmin);
            this.router.navigate(['']);
          } else {
            sessionStorage.setItem('EmployeeId',this.result.EmployeeId);
            this.service.setUserData(this.result);
            this.router.navigate(['user-profile']);

          }
        } else {
          alert("Invalid credentials")

        }
      });
    } else {
      alert("enter valid data")
    }
  }
}