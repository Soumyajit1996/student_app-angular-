import { Component} from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent{

  gender=['male','Female'];
  genderError = true;
  submitted = false;

  constructor(private studentService: StudentService){}
  

  validateGender(value : any){
    if(value === 'default'){
      this.genderError=true;
    }else{
      this.genderError=false;
    }
  }


  errorMsg = '';
  onSubmit(userForm:any){
    this.submitted = true;
    this.studentService.addStudent(userForm.value)
    .subscribe(
      (data: any) => {console.log('Success!' , data)},
      (error: any) => {this.errorMsg = error.statusText}
    )
  }

}
