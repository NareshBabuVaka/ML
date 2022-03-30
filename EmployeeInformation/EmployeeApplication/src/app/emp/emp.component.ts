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
  showAdd!: boolean;
  showUpdate!: boolean;


  constructor(private _myFB: FormBuilder, private service: EmployeeServiceService) { }

  testTypes: string[] = ["Teacher", "Student", "Administrator"];

  testNames: any = {
    Teacher: ["Maths", "Physics", "Chemistry"],
    Student: ["Graduate", "Post Graduate"],
    Administrator: ["Officer", "Assistant"]
  };

  currentTestType = this.testTypes[0];
  currentTestNames = this.testNames[this.currentTestType];



  ngOnInit(): void {
    this.loginForm = this._myFB.group({
      firstName: ['', [Validators.required, Validators.maxLength(8), Validators.pattern("^[a-zA-Z0-9]+$")]],
      lastName: ['', [Validators.required, Validators.maxLength(8), Validators.pattern("^[a-zA-Z0-9]+$")]],
      selectProfession: [this.currentTestType, [Validators.required]],
      chooseType: [this.currentTestNames[0], [Validators.required]]
    })
    this.getAllDetails();
  }

  changeTestType() {
    let newTestType = this.loginForm.get('selectProfession')?.value;

    if (newTestType != this.currentTestType) {
      this.currentTestType = newTestType;
      this.currentTestNames = this.testNames[this.currentTestType];

      this.loginForm.patchValue({
        chooseType: this.currentTestNames[0]
      });
    }
  }


  clickAddUser() {
    this.loginForm.reset();
    this.showAdd = true;
    this.showUpdate = false;
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
    this.service.getUser().subscribe(res => {
      this.employeeData = res;
    })
  }



  deleteUser(row: any) {
    let message = confirm("Are you sure? if you sure press ok");
    if (message) {
      this.service.deleteUser(row.id).subscribe((res: any) => {
        this.getAllDetails();
      })
    }

  }



  onEdit(row: any) {
    this.showAdd = false;
    this.showUpdate = true;


    this.employee.id = row.id;
    this.loginForm.controls['firstName'].setValue(row.firstName);
    this.loginForm.controls['lastName'].setValue(row.lastName);
    this.loginForm.controls['selectProfession'].setValue(row.selectProfession);
    this.loginForm.controls['chooseType'].setValue(row.chooseType);
  }


  updateUserDetails() {
    this.employee.firstName = this.loginForm.value.firstName;
    this.employee.lastName = this.loginForm.value.lastName;
    this.employee.selectProfession = this.loginForm.value.selectProfession;
    this.employee.chooseType = this.loginForm.value.chooseType;

    this.service.updateUser(this.employee, this.employee.id).subscribe(res => {
      console.log(res);
      alert("Entered details updated Successfully...");
      let ref = document.getElementById('cancel');
      ref?.click();
      this.loginForm.reset();
      this.getAllDetails();
    })
  }

}
