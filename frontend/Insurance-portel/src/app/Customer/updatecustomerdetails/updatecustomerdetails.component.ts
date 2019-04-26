import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute, Params} from '@angular/router';
import {AdministratorService} from '../../administrator/administrator.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-updatecustomerdetails',
  templateUrl: './updatecustomerdetails.component.html',
  styleUrls: ['./updatecustomerdetails.component.css'],
  providers: [AdministratorService]
})
export class UpdatecustomerdetailsComponent implements OnInit {
  customerData:any
  customerAddress:String
  updateFormValue:any
  constructor(private router:Router,private route:ActivatedRoute,private service :AdministratorService) { }

  ngOnInit() {
    this.route.params.subscribe(params=> {
      this.service.getCutomerDetailById(params['customerId']).subscribe(customerData => {this.customerData = customerData;
                                            this.customerAddress=this.customerData.customerAddress.city+", "+this.customerData.customerAddress.state+", "+this.customerData.customerAddress.pinCode
      
  });
  })
  }

  onSubmit(updateform:NgForm){
    this.updateFormValue=updateform.value;
    console.log(this.updateFormValue.customerId);
  }
}