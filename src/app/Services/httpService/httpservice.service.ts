import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  BaseUrl = environment.baseUrl;  

  constructor(private HttpClient: HttpClient) { } 

  postService(url: string, reqdata: any, token: boolean= false, httpOptions: any={}){ 
    
    return this.HttpClient.post(this.BaseUrl+url,reqdata,token && httpOptions) 
  }
  
  getService(url: string, token: boolean= false, httpOptions: any={}){ 

    return this.HttpClient.get(this.BaseUrl+url,token && httpOptions) 
 }
}
