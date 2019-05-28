import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginformComponent} from './loginform/loginform.component';
import { AdminatorLoginComponent } from './administrator/adminator-login/adminator-login.component';
import { CustomerlistComponent } from './administrator/customerlist/customerlist.component';

import { HttpClientModule } from '@angular/common/http';
import { InsurancelistComponent } from './administrator/insurancelist/insurancelist.component';
import {AddnewinsuranceComponent} from './administrator/addnewinsurance/addnewinsurance.component'
import {CustomerdetailsComponent} from './Customer/customerdetails/customerdetails.component'
import{UpdatecustomerdetailsComponent} from './Customer/updatecustomerdetails/updatecustomerdetails.component'
import{InsuranceofferComponent} from './Customer/insuranceoffer/insuranceoffer.component'
import{EditcustomerComponent} from './administrator/editcustomer/editcustomer.component'
import{HomepageComponent} from './HomePage/homepage/homepage.component'
import{EditInsuranceComponent} from './administrator/edit-insurance/edit-insurance.component'
import{RegistrationComponent} from './registration/registration.component';
import {AddNewInsuranceByCustomerComponent} from './Customer/add-new-insurance-by-customer/add-new-insurance-by-customer.component'
import {SelectinsuranceComponent} from './Customer/selectinsurance/selectinsurance.component'
import {AuthGuard} from './auth.guard';
import { CustomerDashboardComponent } from './Customer/customer-dashboard/customer-dashboard.component';
const routes: Routes = [
  {path:'',component:HomepageComponent},
  { path: 'Login', component: LoginformComponent },
  {path:"register" ,component:RegistrationComponent},
  {path:"insuranceoffer", component:InsuranceofferComponent},
  {path:"homePage",component:HomepageComponent},
  {path: 'adminview',canActivate:[AuthGuard],
  
children:[
            {
              path:'',
              component:AdminatorLoginComponent
            },
           {
             path:'customerList',
             component:CustomerlistComponent
           },

           {path:"insuranceList",
           component:InsurancelistComponent
          },
          {
            path:"editcustomer",
          component:EditcustomerComponent
        },
        {
          path:"editinsurance/:insuranceId" ,
          component:EditInsuranceComponent
        },
        {
          path:"addnewinsurance", 
        component: AddnewinsuranceComponent
      },
]

},
 
 {path:'customerDashboard' ,canActivate:[AuthGuard],
 
 children:[
  {  path:'',
     component:CustomerDashboardComponent
  },
  {
    path:"customerdetails", 
    component: CustomerdetailsComponent
  
  },
  {path:"updatecustomerdetails",
   component:UpdatecustomerdetailsComponent
  },
  {
    path:"selectInsurance", 
  component:SelectinsuranceComponent
},

{path:"addNewInsuranceByCustomer/:insuranceId", 

component:AddNewInsuranceByCustomerComponent}
 ]

 }, 
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
