import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from 'src/app/Services/Book/book.service';

@Component({
  selector: 'app-getcart',
  templateUrl: './getcart.component.html',
  styleUrls: ['./getcart.component.scss']
})
export class GetcartComponent implements OnInit {

  BookingForm!: FormGroup;
  submitted = false;
  
  booksArray: any;
  token: any;
  Book: any;
  quantity: any;

  showAddress = true;
  showButton = true;
  showCart = true;
  showContinueButton = true;


  cartcount: any;
  constructor(private httpGetCart: BookService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.getCartbook();

    this.BookingForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      phonenumber: ['', [Validators.required]],
      fullAddress: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],

    });

  }
  onSubmit() {
    this.showCart = false;
    this.showContinueButton = false;

    this.submitted = true;
    if (this.BookingForm.valid) {

      let reqdata = {
        addressType: "Home",
        fullAddress: this.BookingForm.value.fullAddress,
        city: this.BookingForm.value.city,
        state: this.BookingForm.value.state
      }
      this.httpGetCart.PutOrder(reqdata).subscribe((response: any) => {
        console.log('Update successfully', response);
      });
    }
  }

  getCartbook() {
    this.httpGetCart.getCart().subscribe((response: any) => {
      console.log(response);
      this.booksArray = response.result;
      console.log(this.booksArray);

    });
  }

  addressToggle() {
    this.showAddress = false
    this.showButton = false
  }

  removeCart(Book: any) {
    this.httpGetCart.removecartitem(Book._id).subscribe((response: any) => {
      console.log('Remove successfully', response);
    })
  }

  ordersummary() {
    let orders: Array<any> = []
    for (this.Book of this.booksArray) {

      let order = {
        "product_id": this.Book.product_id._id,
        "product_name": this.Book.product_id.bookName,
        "product_quantity": this.Book.product_id.quantity,
        "product_price": this.Book.product_id.price,
      }

      orders.push(order)
    }
    let reqdata = {
      orders: orders
    }
    console.log(reqdata)

    this.httpGetCart.order(reqdata).subscribe((response) => {
      console.log('successfully ordered', response);
      this.router.navigate(['/dashboard/placeOrder'])
    })
  }


}
