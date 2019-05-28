import { Component, OnInit } from '@angular/core';
import {InsuranceType,InsuranceCategory} from '../../administrator/addnewinsurance/insurancetype';
import { Router , ActivatedRoute, Params} from '@angular/router';
import { NgForm } from '@angular/forms';
import{CustomerService} from '../customer.service';
import {CustomerInsurance} from './addNewInsurance';
import {AdministratorService} from '../../administrator/administrator.service'
@Component({
  selector: 'app-add-new-insurance-by-customer',
  templateUrl: './add-new-insurance-by-customer.component.html',
  styleUrls: ['./add-new-insurance-by-customer.component.css'],
  providers: []
})
export class AddNewInsuranceByCustomerComponent implements OnInit {
 
  
  insuranceCategory:InsuranceCategory[];
  tokenId:String;
  insuranceId:String;
  insuranceDetailsCheck:boolean = false;
  insuranceDetails:CustomerInsurance;
  constructor(private route:ActivatedRoute,private service:CustomerService,private adminService:AdministratorService,private router:Router) {
    

   }
   ngOnInit() {
    this.route.params.subscribe(params =>{
      this.tokenId = localStorage.getItem('currentUser');
      this.adminService.getInsuranceDetailsById(params['insuranceId']).subscribe((insuranceDetails:any)=> {
       
        this.insuranceDetails = insuranceDetails;
        this.insuranceDetailsCheck=true;
      
      
      });
    })
  }
  
addNewIsurance(addNewInsurance:NgForm){
  //console.log(addNewInsurance.value);
  this.insuranceDetails = addNewInsurance.value;
//console.log(this.insuranceDetails);
  this.service.addNewInsurance(this.insuranceDetails,this.tokenId).subscribe( 
    data => console.log('success', data),
    error => {error.error.text;
     this.router.navigate(['/customerDashboard/customerdetails']);

    });
}
}
