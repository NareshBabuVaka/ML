import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Employee } from '../data/Employee';
import { EmployeeServiceService } from '../employee-service.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.scss']
})
export class EmpComponent implements OnInit {
  loginForm!: FormGroup;
  employee: Employee = new Employee();
  employeeData !: any;

  constructor(private _myFB: FormBuilder, private service: EmployeeServiceService) { }

  ngOnInit(): void {
    this.loginForm = this._myFB.group({
      firstName: ['',[Validators.required,Validators.maxLength(8),Validators.pattern("^[a-zA-Z0-9]+$")]],
      lastName: ['',[Validators.required,Validators.maxLength(8),Validators.pattern("^[a-zA-Z0-9]+$")]],
      selectProfession: ['',Validators.required],
      chooseType: ['',Validators.required]
    })
    this.getAllDetails();
  }

  postUserDetails() {
    this.employee.firstName = this.loginForm.value.firstName;
    this.employee.lastName = this.loginForm.value.lastName;
    this.employee.selectProfession = this.loginForm.value.selectProfession;
    this.employee.chooseType = this.loginForm.value.chooseType;
    this.service.postUser(this.employee).subscribe(res => {
      console.log(res);
      alert("Entered details added Successfully...");
      let ref = document.getElementById('cancel');
      ref?.click();
      this.loginForm.reset();
      this.getAllDetails();
    }, err => {
      alert("oops.. something went wrong please try again...");
    })
  }
  getAllDetails() {
    this.service.getUsers().subscribe(res => {
      this.employeeData = res;
    })
  }
}
