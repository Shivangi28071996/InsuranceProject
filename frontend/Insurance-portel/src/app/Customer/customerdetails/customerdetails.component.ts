import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute, Params} from '@angular/router';
import {CustomerService} from '../customer.service';
import {CustomerDetails} from '../../administrator/customerlist/customerList';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import{UpdatePassword} from './updatePassword'
import * as $ from 'jquery';
import { LoginserviceService } from 'src/app/loginform/loginservice.service';



@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.css'],
  providers: [CustomerService]
})

export class CustomerdetailsComponent implements OnInit {
  customerDetail:CustomerDetails;
  contactDetails:boolean=false;
  personalDetails:boolean=false;
  insuranceList:boolean=false;
  checkPassword:String;
  message:String;
  sussessMessage:String;
  checkmessage:boolean=false;
  updateCustomerPassword:UpdatePassword;
  tokenId:String;
  constructor(private router:Router,private route:ActivatedRoute,private service :CustomerService,private loginService:LoginserviceService) { }

  ngOnInit() {
    this.tokenId = localStorage.getItem('currentUser');
    
      this.service.getCutomerDetailById(this.tokenId ).subscribe((customerDetails:any)=>{ this.customerDetail = customerDetails;
                                                                                                  
                                                                                                    this.contactDetails=true;
                                                                                                    this.personalDetails=true;
                                                                                                    this.checkInsuranceDetails();
                                                                                                    
      
      
      });
                                                                              
   
   
  }
  checkInsuranceDetails(){
    if(this.customerDetail.customerInsurance.length>0){
      this.insuranceList=true;
    }
  }
  addNewInsurance(){
      this.router.navigate(['customerDashboard/selectInsurance']);
  }
  deactiveAccount(customerId:String){
    if(confirm("Are you sure !")){
       this.service.deactiveAccount(customerId).subscribe(
        data => console.log('success', data),
        error => {
         
          console.log(error.error.text); 
          this.logout();
          this.router.navigate(['/Login']);

           });
          }
  }

  updateCustomerDetails(customerId:String){
    this.router.navigate(['customerDashboard/updatecustomerdetails'])
  }
  updatePassword(form:NgForm){
    this.updateCustomerPassword = form.value;
     
    //  this.service.updatePassword(this.updateCustomerPassword,this.customerDetail.customerId).subscribe(
    //   data => console.log('success', data),
    //   error => {this.checkPassword= error.error.text;
    //           this.checkCustomerPassword();    
    //      });

      if(this.customerDetail.password ===this.updateCustomerPassword.oldPassword){
        if(this.updateCustomerPassword.newPassword ===this.updateCustomerPassword.confirmPassword){
           this.service.updatePassword(this.updateCustomerPassword,this.customerDetail.customerId).subscribe(
      data => console.log('success', data),
      error => {this.checkPassword= error.error.text;
              this.checkCustomerPassword();
         });
        }
        else{
          this.checkmessage=true;
          this.message="New password or confirm password not matched!"
        }

      }
      else{
        this.checkmessage=true;
        this.message="Old Password is incorrect!"
      }
  }
  checkCustomerPassword(){
 
     if(this.checkPassword==="updated"){
      $(window.location.reload()); 
      this.logout();
      
    }
  }

  logout(){
    this.loginService.logout();
    this.router.navigate(['/Login'])
  }

}
