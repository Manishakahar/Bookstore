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

  

  AddToWishList(productId: any) {
    console.log('productId',productId)
    this.token = localStorage.getItem('token');

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.postService('/bookstore_user/add_wish_list/' + productId, {}, true, header);
  }

    addToBag(productId: any) {
    console.log('productId',productId)
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.postService('/bookstore_user/add_cart_item/' + productId, {}, true, header)
  }

  getCart() {
    this.token = localStorage.getItem('token');
    console.log('token',this.token);

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token
      })
    }
    console.log(header);
    return this.httpService.getService('/bookstore_user/get_cart_items/', true, header);
  }

  PutOrder(reqdata: any) {
    
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.putService('/bookstore_user/edit_user/',reqdata, true, header)
  }

  removecartitem(productID: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token    
      })
    }
    return this.httpService.deleteService('/bookstore_user/remove_cart_item/' + productID, {}, true, header)
  }

  order(reqdata: any) {
    this.token = localStorage.getItem('token');
    let options = {
      headers: new HttpHeaders({
        'x-access-token': this.token,
        'Content-Type': 'application/json'
      })
    }
    return this.httpService.postService('/bookstore_user/add/order',reqdata,true, options);
  }

  getfeedBack(data: any){
    this.token = localStorage.getItem('token');
    let header = {
      headers: new HttpHeaders({  
       'Content-Type': 'application/json',
        'x-access-token': this.token
      })
    }
    console.log(header); 
    return this.httpService.getService('/bookstore_user/get/feedback/'+ data.product_id,true,header);
  
  }
  
  addfeedback(productID:any,data:any){
    console.log('productId',productID)
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.postService('/bookstore_user/add/feedback/' + productID, data, true, header)
  }
  
}
