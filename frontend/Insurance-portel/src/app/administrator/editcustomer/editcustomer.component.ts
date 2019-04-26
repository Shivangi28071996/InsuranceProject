import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute, Params} from '@angular/router';
import {AdministratorService} from '../administrator.service'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editcustomer',
  templateUrl: './editcustomer.component.html',
  styleUrls: ['./editcustomer.component.css'],
  providers: [AdministratorService]
})
export class EditcustomerComponent implements OnInit {

  customerData:any
  customerAddress:String
  insuranceDetail:[];
  insuranceList:boolean=false;
  constructor(private router:Router,private route:ActivatedRoute,private service :AdministratorService) { }

  ngOnInit() {
    this.route.params.subscribe(params=> {
      this.service.getCutomerDetailById(params['customerId']).subscribe(customerData => {this.customerData = customerData;
                                            this.customerAddress=this.customerData.customerAddress.city+", "+this.customerData.customerAddress.state+", "+this.customerData.customerAddress.pinCode;
                                            this.getInsuranceDetail()});
      
  });
  }

  getInsuranceDetail(){
    if(this.customerData.customerInsurance.length>0){
      this.insuranceList=true;
      this.insuranceDetail=this.customerData.customerInsurance;
    }
  }

  editDetails(editForm:any){
    console.log(editForm);
   }
}
