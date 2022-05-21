import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Services/Book/book.service';

@Component({
  selector: 'app-quickview',
  templateUrl: './quickview.component.html',
  styleUrls: ['./quickview.component.scss']
})
export class QuickviewComponent implements OnInit {
  booksArray: any;
  BookId: any;
  Book: any;
  feedback: any;
  getShortName: any;
  token: any;
  rating: any;
  value: any;
  comment: any;
  constructor(private bookService: BookService) { }
  ngOnInit(): void {
    this.BookId = localStorage.getItem("BookId");
    console.log(this.BookId);
    this.getUserAllBook();
     this.getUserFeedback();
  }

  getUserAllBook() {
    this.bookService.usergetallbooks().subscribe((response: any) => {
      response.result.forEach((element: any) => {
        if (element._id == this.BookId) {
          this.Book = element;
        }
      });
    })
  }

  addFeedback() {
    let data = {
      comment: this.feedback,
      rating: this.value
    }
    this.bookService.addfeedback(this.BookId, data).subscribe((response: any) => {
      console.log("User Feedback", response);
    })
  }

  getUserFeedback() {
    let reqdata = {
      product_id: this.BookId
    }
    this.bookService.getfeedBack(reqdata).subscribe((response: any) => {
      console.log('User Feedback', response);
      this.booksArray = response.result;
    });
  }
}





