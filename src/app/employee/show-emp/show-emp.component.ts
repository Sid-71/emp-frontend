import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {

  constructor(private service : SharedService){}

  EmpList : any=[];

  ModalTitle:string ="";
  ActivateAddEditEmpComp : boolean=false;
  emp : any;
 ngOnInit(): void {
  this.refreshEmpList();
}



refreshEmpList(){
 this.service.getEmpList().subscribe(res=>{
   this.EmpList = res
  })
}


addClick(){
 this.emp={
  EmployeeId:0,
  EmployeeName:"",
  Department:"",
  DateOfJoining:"",
  isAdmin:false,
  email:"",
  password:""

 }
 this.ModalTitle="Add Employee";
 this.ActivateAddEditEmpComp=true
}

closeClick(){
 this.refreshEmpList();
 this.ActivateAddEditEmpComp=false
}




editClick(item : any){
  this.emp=item
  this.ModalTitle="Edit Dept"
  this.ActivateAddEditEmpComp = true
}


deleteClick(item : any){
 if(confirm('Are  you sure')){
   this.service.deleteEmployee(item.EmployeeId).subscribe(data=>{
     alert(data.toString());
     this.refreshEmpList()
   })
 }
}
}
