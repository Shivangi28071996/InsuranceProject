import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute, Params} from '@angular/router';
import {AdministratorService} from '../../administrator/administrator.service';
import { NgForm } from '@angular/forms';
import{CustomerDetails} from '../../administrator/customerlist/customerList';
import{CustomerService} from '../customer.service';
import * as $ from 'jquery';

declare var $: any;

@Component({
  selector: 'app-updatecustomerdetails',
  templateUrl: './updatecustomerdetails.component.html',
  styleUrls: ['./updatecustomerdetails.component.css'],
  providers: [AdministratorService]
})
export class UpdatecustomerdetailsComponent implements OnInit {
  customerData:CustomerDetails;
  customerAddress:String
  updateFormValue:any
  personalDetails:boolean=false;
  tokenId:String;
  constructor(private router:Router,private route:ActivatedRoute,private service :AdministratorService,private custService:CustomerService) { }

  ngOnInit() {
     
     this.tokenId = localStorage.getItem('currentUser');
      this.service.getCutomerDetailById(this.tokenId).subscribe((customerDetails:any)=>{ this.customerData = customerDetails;
                                                                                                  
                                                                                                        this.personalDetails=true;
});
 

  }
  ngAfterViewChecked() {
    $('.alpha_bet').keypress(function(key) {
      if((key.charCode < 97 || key.charCode > 122) && (key.charCode < 65 || key.charCode > 90) && (key.charCode!=32) && (key.charCode!=45) ) return false;
  });
  
  $('.mobileNo').keypress(function(key) {
      if(key.charCode < 48 || key.charCode > 57) return false;
  });
   

  }

  onSubmit(updateform:NgForm){
    this.customerData=updateform.value;
   

   this.custService.updateCustomerDetails(this.customerData).subscribe(
    data => console.log("Success" ,data),
    error =>{error.error.text;
      this.router.navigate(['/customerDashboard/customerdetails']);
    }
   );
  }
}