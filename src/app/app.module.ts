import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {FlexLayoutModule } from '@angular/flex-layout';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import {MatRadioModule} from '@angular/material/radio';
import {MatMenuModule} from '@angular/material/menu';
import {NgxPaginationModule} from 'ngx-pagination';


import { SignUpComponent } from './component/sign-up/sign-up.component';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ForgotpasswordComponent } from './component/forgotpassword/forgotpassword.component';
import { GetallbookComponent } from './component/getallbook/getallbook.component';
import { QuickviewComponent } from './component/quickview/quickview.component';
import { GetcartComponent } from './component/getcart/getcart.component';
import { PlaceOrderComponent } from './component/place-order/place-order.component';
import { PipePipe } from './component/pipe/pipe.pipe';
import { WishlistComponent } from './component/wishlist/wishlist.component';



@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    DashboardComponent,
    ForgotpasswordComponent,
    GetallbookComponent,
    QuickviewComponent,
    GetcartComponent,
    PlaceOrderComponent,
    PipePipe,
    WishlistComponent,
   
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  
    AppRoutingModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatDividerModule,
    MatRadioModule,
    MatMenuModule,
    NgxPaginationModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
