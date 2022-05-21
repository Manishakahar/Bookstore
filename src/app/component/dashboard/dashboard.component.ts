import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/Services/DataService/dataservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private route:Router, private dataService:DataserviceService )  { }
    
  

  ngOnInit(): void {
  }
  Login(){
    this.route.navigateByUrl('login');
  }
  clearFilter(search: any) {  
    console.log(search);  
    this.dataService.sendData(search) 
  }
}
