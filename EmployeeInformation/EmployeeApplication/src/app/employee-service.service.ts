import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './data/Employee';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  // private url = "http://localhost:3000/Employee";





  constructor(private http: HttpClient) { }



  // getAllDetails() {
  //   return this.http.get<Employee[]>(this.url)
  // }




  // createEmployee(employee: Employee): Observable<object> {
  //   return this.http.post(`${this.url}` + 'createEmployee', employee);
  // }


  postUser(data: any) {

    return this.http.post("http://localhost:3000/posts", data).pipe(map((res: any) => {

      return res;

    }))

  }

  getUsers() {
    return this.http.get('http://localhost:3000/posts').pipe(map((res: any) => {

      return res;

    }))
  }
}
