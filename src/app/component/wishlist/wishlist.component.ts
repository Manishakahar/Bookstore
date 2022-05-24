import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Services/Book/book.service';
import { DataserviceService } from 'src/app/Services/DataService/dataservice.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  constructor(private bookService: BookService, private dataService: DataserviceService) { }
  wishListArray: any = [];


  ngOnInit(): void {
    this.getWishlist()
    this.dataService.receivedData.subscribe(
      (response: any) => {
        console.log(response);
        this.getWishlist();
      })


  }
  getWishlist() {
    this.bookService.getWishlist().subscribe((response: any) => {
      console.log(response.result)
      this.wishListArray = response['result'];
      console.log("getBooksArray", this.wishListArray);

    })
  }

  deleteWishlist(data: any) {
    this.bookService.deleteWishlist(data).subscribe((response: any) => {
      console.log('delete wishlist', response)
      this.dataService.sendData(response);
    })
  }
}
