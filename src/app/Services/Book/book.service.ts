import { Injectable } from '@angular/core';
import { HttpserviceService } from '../httpService/httpservice.service';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  token: any;
  NoteId: any
  constructor(private httpService: HttpserviceService) {
    this.token = localStorage.getItem('token')
  }


  usergetallbooks() {
    this.token = localStorage.getItem('token')
    console.log("inside getbook service");
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.httpService.getService('/bookstore_user/get/book', true, headers)
  }
}
