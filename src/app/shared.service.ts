import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  // readonly APIUrl = "http://127.0.0.1:8000"
  readonly APIUrl = "http://13.232.73.152:8000"
   
  constructor (private http:HttpClient) { }

  getDepList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/department/');
   } 

  addDepartment (val:any) {
    console.log("val",val);

    console.log("url ddata",this.http.post(this.APIUrl + '/department/', val));
    return this.http.post(this.APIUrl + '/department/', {DeprartmentName:val});
    }
  updateDepartment (val:any) {
      console.log(val);
      return this.http.put(this.APIUrl + '/department/', val);
      }
  deleteDepartment (val:any) {
        return this.http.delete(this.APIUrl + '/department/' + val);
        }

  getEmpList ():Observable<any[ ]>{
          return this.http.get<any[]>(this.APIUrl + '/employee/');
         } 
      
  addEmployee (val:any) {
          return this.http.post(this.APIUrl + '/employee/', val);
          }
  loginEmployee(val:any){
    // return this.http.post("http://localhost:5400/login",val);
    return this.http.post("http://13.232.73.152:5400/login",val);
  }
  updateEmployee (val:any) {
           console.log("val",val);
            return this.http.put(this.APIUrl + '/employee/', val);
            }
  deleteEmployee (val:any) {
              return this.http.delete(this.APIUrl + '/employee/' + val);
  }

  getDepartmentNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/department/');
   } 

   isloggedin(){
    return sessionStorage.getItem('EmployeeId')!=null;
  }
  getrole(){
    return sessionStorage.getItem('isAdmin')!=null?sessionStorage.getItem('isAdmin')?.toString():'';
  }
  private userDataSubject = new BehaviorSubject<any>(null);
  userData$ = this.userDataSubject.asObservable();

  setUserData(userData: any): void {
    this.userDataSubject.next(userData);
  }
  getUserData(): any {
    return this.userDataSubject.value;
  }
}
