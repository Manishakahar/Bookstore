import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/Services/Book/book.service';

@Component({
  selector: 'app-getallbook',
  templateUrl: './getallbook.component.html',
  styleUrls: ['./getallbook.component.scss']
})
export class GetallbookComponent implements OnInit {
  booksArray: any = [];
  Book: any;
  token: any;
  constructor(private httpGetAllBook: BookService, private router: Router) { }

  ngOnInit(): void {
    this.getAllBook();
  }

  getAllBook() {
    this.httpGetAllBook.usergetallbooks().subscribe((response: any) => {
      console.log(response);
      this.booksArray = response.result;
      console.log(this.booksArray);
    });
  }

  AddToWishList(Book: any) {
    this.httpGetAllBook.AddToWishList(Book._id).subscribe((response: any) => {
      console.log('Wishlist GetBooks', response)

    })
   }

   AddToBag(Book: any){
   this.httpGetAllBook.addToBag(Book._id).subscribe((response:any) =>{
     console.log('Add To Bag ',response)
   })
   }

}
