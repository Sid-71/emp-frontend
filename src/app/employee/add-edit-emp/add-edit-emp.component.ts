import { compileNgModule } from '@angular/compiler';
import { Component,Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {

  constructor(private service : SharedService){}
  @Input() emp:any;
  EmployeeName:any
  EmployeeId:any
  val : any
  departmentList : any = []
  Department:any
  DateOfJoining:any
  isAdmin:any
  email:any
  password:any

  ngOnInit(): void {
   
  this.loadDepartmentList()
  }
  
  loadDepartmentList ():void {
    this.service.getDepList().subscribe((res)=>{
      this.departmentList=res
       console.log("res",res);
      this.EmployeeId = this.emp.EmployeeId
      this.EmployeeName=this.emp.EmployeeName;
      this.Department = this.emp.Department
      this.DateOfJoining=this.emp.DateOfJoining;
      this.isAdmin=this.emp.isAdmin;
      this.email=this.emp.email;
      this.password=this.emp.password;
    })
  }


  addEmployee(){
     this.val = {
      EmployeeId:this.EmployeeId,
      EmployeeName:this.EmployeeName,
      Department:this.Department,
      DateOfJoining:this.DateOfJoining,
      isAdmin:this.emp.isAdmin,
      email:this.email,
      password:this.password,
     }
    console.log("val",this.val);
    this.service.addEmployee(this.val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateEmployee(){
    this.val = {
      EmployeeId:this.EmployeeId,
      EmployeeName:this.EmployeeName,
      Department:this.Department,
      DateOfJoining:this.DateOfJoining,
      isAdmin:this.emp.isAdmin,
      email:this.email,
      password:this.password,
     }
    console.log("val",this.val);
    this.service.updateEmployee(this.val).subscribe(res=>{
    alert(res.toString());
    });
  }

  
}
