import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quickview',
  templateUrl: './quickview.component.html',
  styleUrls: ['./quickview.component.scss']
})
export class QuickviewComponent implements OnInit {
  bookdata: any;
  book:any;
  constructor() { }

  ngOnInit(): void {
  }

}
