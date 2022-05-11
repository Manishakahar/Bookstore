import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpserviceService } from '../httpService/httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   
  constructor(private httpService: HttpserviceService) { }

  signUpUser(reqdata:any){
    
    let headers  = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
      })
    };
    return this.httpService.postService('bookstore_user/registration',reqdata,false, headers)
  }

  loginUser(reqdata: any) {
  
    let headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.httpService.postService('bookstore_user/login', reqdata, false, headers)
  }
}
