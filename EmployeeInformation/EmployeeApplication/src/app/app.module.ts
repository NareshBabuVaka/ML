import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeShowComponent } from './employee-show/employee-show.component';
import { HttpClientModule } from '@angular/common/http';
import { EmpComponent } from './emp/emp.component'

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeShowComponent,
    EmpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
