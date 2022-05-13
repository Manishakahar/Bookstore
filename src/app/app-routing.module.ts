import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { ForgotpasswordComponent } from './component/forgotpassword/forgotpassword.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { GetallbookComponent } from './component/getallbook/getallbook.component';
import { QuickviewComponent } from './component/quickview/quickview.component';


const routes: Routes = [
  { path:'signUp',component:SignUpComponent},
  {path:'login', component:LoginComponent},
  {path:'forgot',component:ForgotpasswordComponent},
  // {path:'dashboard',component:DashboardComponent},
  

  {
    path: 'dashboard', component:DashboardComponent,

    children: [
      { path: '', redirectTo: 'notes', pathMatch: 'full', },
      {path:'getallbook',component:GetallbookComponent},
      {path:'quickview',component:QuickviewComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
