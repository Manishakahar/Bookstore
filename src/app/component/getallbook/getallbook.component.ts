import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/Services/Book/book.service';
import { DataserviceService } from 'src/app/Services/DataService/dataservice.service';

@Component({
  selector: 'app-getallbook',
  templateUrl: './getallbook.component.html',
  styleUrls: ['./getallbook.component.scss']
})
export class GetallbookComponent implements OnInit {
  booksArray: any = [];
  Bookid:any;
  Book: any;
  token: any;
  searchword: any; 
  page:number = 1;
  totalLength:any;
  
  
  constructor(private httpGetAllBook: BookService,  private dataservice: DataserviceService, private router: Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.dataservice.receivedData.subscribe((response) => {
      console.log(response)
          this.searchword = response;
          console.log(this.searchword);
    }) ;
   
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

   quickview(Book:any){  
    localStorage.setItem('BookId', Book._id); 
    this.router.navigateByUrl('/dashboard/quickview/' + Book._id)
  }


  lowtohigh(){
    this.booksArray= this.booksArray.sort((low:any,high:any)=> low.discountPrice-high.discountPrice);
    }
  hightolow(){
    this.booksArray= this.booksArray.sort((low:any,high:any)=> high.discountPrice-low.discountPrice);
  }
  newestarrivals(){
    this.booksArray.reverse();
  }

}
