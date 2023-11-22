import { Component,Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-dp',
  templateUrl: './add-edit-dp.component.html',
  styleUrls: ['./add-edit-dp.component.css']
})
export class AddEditDpComponent implements OnInit {

  constructor(private service : SharedService){}
  @Input() dep:any;
  DeprartmentName:any
  DepartmentId:any
  val : any

  ngOnInit(): void {
    this.DepartmentId = this.dep.DepartmentId
    this.DeprartmentName=this.dep.DepartmentName;
  }
  addDepartment(){
     this.val = {DepartmentId:this.DepartmentId,
                DeprartmentName:this.DeprartmentName};
    console.log("val",this.val);
    this.service.addDepartment(this.val.DeprartmentName).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateDepartment(){
    var val = {DepartmentId:this.DepartmentId,
      DeprartmentName:this.DeprartmentName};
    this.service.updateDepartment(val).subscribe(res=>{
    alert(res.toString());
    });
  }


}
