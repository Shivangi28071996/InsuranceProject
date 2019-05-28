import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerlistComponent } from './administrator/customerlist/customerlist.component';
import { InsurancelistComponent } from './administrator/insurancelist/insurancelist.component';
import { AdminatorLoginComponent } from './administrator/adminator-login/adminator-login.component';
import { LoginformComponent } from './loginform/loginform.component';
import { FormsModule } from '@angular/forms'
import { AdministratorService } from './administrator/administrator.service';
import { HomepageComponent } from './HomePage/homepage/homepage.component';
import { AddnewinsuranceComponent } from './administrator/addnewinsurance/addnewinsurance.component';
import { CustomerdetailsComponent } from './Customer/customerdetails/customerdetails.component';
import { UpdatecustomerdetailsComponent } from './Customer/updatecustomerdetails/updatecustomerdetails.component';
import { InsuranceofferComponent } from './Customer/insuranceoffer/insuranceoffer.component';
import { EditcustomerComponent } from './administrator/editcustomer/editcustomer.component';
import { VehicleinsurancelistComponent } from './Customer/insuranceoffer/vehicleinsurancelist/vehicleinsurancelist.component';
import { HomeinsurancelistComponent } from './Customer/insuranceoffer/homeinsurancelist/homeinsurancelist.component';
import { LifeinsurancelistComponent } from './Customer/insuranceoffer/lifeinsurancelist/lifeinsurancelist.component'
import{HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http'
import { MatRippleModule,MatButtonModule,MatMenuModule, MatToolbarModule,MatIconModule,MatCardModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditInsuranceComponent } from './administrator/edit-insurance/edit-insurance.component';
import{DataService} from './administrator/addnewinsurance/dataservice.service'
import{LoginserviceService} from './loginform/loginservice.service';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { RegistrationComponent } from './registration/registration.component';
import { AddNewInsuranceByCustomerComponent } from './Customer/add-new-insurance-by-customer/add-new-insurance-by-customer.component';
import { SelectinsuranceComponent } from './Customer/selectinsurance/selectinsurance.component'
import { AuthService } from './auth.service';
import { CustomerDashboardComponent } from './Customer/customer-dashboard/customer-dashboard.component';
import { DashboardComponent } from './shared/dashboard/dashboard/dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    CustomerlistComponent, 
    InsurancelistComponent,
    AdminatorLoginComponent,
    LoginformComponent,
    HomepageComponent,
    AddnewinsuranceComponent,
    CustomerdetailsComponent,
    UpdatecustomerdetailsComponent,
    InsuranceofferComponent,
    EditcustomerComponent,
    VehicleinsurancelistComponent,
    HomeinsurancelistComponent,
    LifeinsurancelistComponent,
    EditInsuranceComponent,
    FooterComponent,
    HeaderComponent,
    RegistrationComponent,
    AddNewInsuranceByCustomerComponent,
    SelectinsuranceComponent,
    CustomerDashboardComponent,
    DashboardComponent,
   
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpModule,HttpClientModule,MatRippleModule,MatButtonModule,MatMenuModule, MatToolbarModule,MatIconModule,MatCardModule,BrowserAnimationsModule              
  ],
  providers: [AdministratorService,DataService,LoginserviceService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
