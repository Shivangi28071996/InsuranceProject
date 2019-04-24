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
import { CustomerdetailsComponent } from './Customer/customerdetails/customerdetails.component'

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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AdministratorService,DataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
