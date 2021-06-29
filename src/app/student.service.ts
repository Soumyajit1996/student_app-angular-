import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  

  addStudent(form: any){
    return this.http.post("https://localhost:8080/insertStudent",form);
  }
  deleteStudent(){
    return this.http.delete("");
  }
  updateStudent(){
    return this.http.put("","");
  }
}
