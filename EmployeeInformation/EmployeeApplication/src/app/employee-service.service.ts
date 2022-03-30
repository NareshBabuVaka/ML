import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './data/Employee';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {






  constructor(private http: HttpClient) { }



  postUser(data: any) {

    return this.http.post("http://localhost:3000/posts", data).pipe(map((res: any) => {

      return res;

    }))

  }

  getUser() {
    return this.http.get('http://localhost:3000/posts').pipe(map((res: any) => {

      return res;

    }))
  }

  deleteUser(id: number) {

    return this.http.delete('http://localhost:3000/posts/' + id).pipe(map((res: any) => {

      return res;
    }))
  }


  updateUser(data: any, id: number) {

    return this.http.put('http://localhost:3000/posts/' + id, data).pipe(map((res: any) => {

      return res;

    }))

  }

}
