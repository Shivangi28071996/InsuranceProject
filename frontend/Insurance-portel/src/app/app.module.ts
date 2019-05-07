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
import {DataserviceService} from './administrator/addnewinsurance/dataservice.service';
import { CustomerdetailsComponent } from './Customer/customerdetails/customerdetails.component';
import { UpdatecustomerdetailsComponent } from './Customer/updatecustomerdetails/updatecustomerdetails.component';
import { InsuranceofferComponent } from './Customer/insuranceoffer/insuranceoffer.component';
import { EditcustomerComponent } from './administrator/editcustomer/editcustomer.component';
import { VehicleinsurancelistComponent } from './Customer/insuranceoffer/vehicleinsurancelist/vehicleinsurancelist.component';
import { HomeinsurancelistComponent } from './Customer/insuranceoffer/homeinsurancelist/homeinsurancelist.component';
import { LifeinsurancelistComponent } from './Customer/insuranceoffer/lifeinsurancelist/lifeinsurancelist.component'
import{HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http'
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
    LifeinsurancelistComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpModule,HttpClientModule
  ],
  providers: [AdministratorService,DataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
