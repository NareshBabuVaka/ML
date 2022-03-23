import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})



export class EmployeeComponent implements OnInit {

  loginForm: any;

  constructor(private _myFB: FormBuilder, private router: Router, private service: EmployeeServiceService) { }


  ngOnInit(): void {
    this.loginForm = this._myFB.group({

      FirstName: ['', Validators.required, Validators.maxLength(8), Validators.pattern("^[a-zA-Z0-9]+$")],
      LastName: ['', Validators.required, Validators.maxLength(8), Validators.pattern("^[a-zA-Z0-9]+$")],
      SelectProfession: ['', Validators.required],
      ChooseType: ['', Validators.required]

    })

  }

  // saveEmployee() 
  // {
  //   this.service.createEmployee(this.loginForm.value).subscribe(data=>{
  //     console.log(data);
  //   },
  //   error => console.log(error),
  //   ()=>this.router.navigate(['/'])
  //   )

  //   }
    
    // onSubmit() 
    // {
    //   console.log(this.saveEmployee);
    //   this.saveEmployee();
    // }
     
  }


  




















