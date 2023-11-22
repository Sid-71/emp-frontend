import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {
 constructor(private service : SharedService){}
 DepartmentList : any=[];

 ModalTitle:string ="";
 ActivateAddEditComp : boolean=false;
 dep : any;

  
 
 ngOnInit(): void {
   this.refreshDepList();
 }
 
 
 
 refreshDepList(){
  this.service.getDepList().subscribe(res=>{
    this.DepartmentList = res
   })
 }
 

 addClick(){
  this.dep={
    DepartmentId:0,
    DepartmentName:""
  }
  this.ModalTitle="Add Department";
  this.ActivateAddEditComp=true
 }

 closeClick(){
  this.refreshDepList();
  this.ActivateAddEditComp=false
 }




 editClick(item : any){
   this.dep=item
   this.ModalTitle="Edit Dept"
   this.ActivateAddEditComp = true
 }
 

 deleteClick(item : any){
  if(confirm('Are  you sure')){
    this.service.deleteDepartment(item.DepartmentId).subscribe(data=>{
      alert(data.toString());
      this.refreshDepList()
    })
  }
 }


}
