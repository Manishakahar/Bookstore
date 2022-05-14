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

  addToCart(productID: any) {  
    this.token = localStorage.getItem('token')

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token   
      })
    }
    return this.httpService.postService('/bookstore_user/add_cart_item/{product_id}' + productID, {}, true, header)
  }

  AddToWishList(data: any) {
    this.token = localStorage.getItem('token');

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.postService('/bookstore_user/add_wish_list/'+data._id,{},true, header);
  }

  getWishList(){
    this.token = localStorage.getItem('token');

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token
      })
    }
    console.log(header); 
    
    return this.httpService.getService('/bookstore_user/get_wishlist_items',true,header);

  }
}
