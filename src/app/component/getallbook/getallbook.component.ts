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
  constructor(private httpGetAllBook: BookService,private router: Router) { }
  
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
}
