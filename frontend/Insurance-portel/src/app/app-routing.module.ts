import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginformComponent} from './loginform/loginform.component';
import { AdminatorLoginComponent } from './administrator/adminator-login/adminator-login.component';
import { CustomerlistComponent } from './administrator/customerlist/customerlist.component';

import { HttpClientModule } from '@angular/common/http';
import { InsurancelistComponent } from './administrator/insurancelist/insurancelist.component';
import {AddnewinsuranceComponent} from './administrator/addnewinsurance/addnewinsurance.component'
import {CustomerdetailsComponent} from './Customer/customerdetails/customerdetails.component'
const routes: Routes = [
  { path: 'Login', component: LoginformComponent },
  {path: 'adminview', component:AdminatorLoginComponent},
  {path:'customerList',component:CustomerlistComponent},
  {path:"insuranceList",component:InsurancelistComponent},
  {path:"addnewinsurance1", component: AddnewinsuranceComponent},
  {path:"customerdetails", component: CustomerdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
