import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {


  private messageSource = new BehaviorSubject('');   // unrelated data sharing
  receivedData = this.messageSource.asObservable();

  constructor() { }

  sendData(message: any) {  
    this.messageSource.next(message)
  }
}
