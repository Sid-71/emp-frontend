import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private builder: FormBuilder, private service: SharedService, private router: Router,
    private toastr: ToastrService) {

  }
  departmentList : any = []

  ngOnInit(): void {
  
    this.loadDepartmentList()
    }
   
    loadDepartmentList ():void {
      this.service.getDepList().subscribe((res)=>{
        this.departmentList=res
         console.log("data to be shown",res);
      })
    }
  

  registerform = this.builder.group({
    EmployeeName: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.compose([Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])),
    email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    isAdmin: this.builder.control(false),
    Department: this.builder.control('', Validators.required), 
  });
  proceedregister() {
    console.log("this.registerform",this.registerform.value)
    if (this.registerform.valid) {
      console.log("registerform",this.registerform.value)
      this.service.addEmployee(this.registerform.value).subscribe(result => {
        this.toastr.success('Please contact admin for enable access.','Registered successfully')
        this.router.navigate(['login'])
      });
    } else {
      
      alert("please enter valid data")
    }
  }

}