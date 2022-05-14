import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-getcart',
  templateUrl: './getcart.component.html',
  styleUrls: ['./getcart.component.scss']
})
export class GetcartComponent implements OnInit {
 bookSArray:any=[];
  book:any
  quantity:any;

  cartcount:any;
  constructor( ) { }

  ngOnInit(): void {

  }
 
}
