import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute, Params} from '@angular/router';
import {AdministratorService} from '../administrator.service'
import { NgForm } from '@angular/forms';
import { CustomerDetails, CustomerAddress, CustomerInsurance } from '../customerlist/customerList';
import {UpdateCustomerDetails} from '../../administrator/editcustomer/updatecustome';



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
  customerDetail:CustomerDetails;
  updateCustomer = new UpdateCustomerDetails();
  constructor(private router:Router,private route:ActivatedRoute,private service :AdministratorService) { }

  ngOnInit() {
    this.route.params.subscribe(params=> {
      this.service.getCutomerDetailById(params['customerId']).subscribe(customerData => {this.customerData = customerData;
        console.log("Customer Details -======="+JSON.stringify(this.customerData.insuranceDetail));             
        this.getInsuranceDetail()});
      
  });

  }

  getInsuranceDetail(){
    if(this.customerData.customerInsurance.length>0){
      this.insuranceList=true;
      this.insuranceDetail=this.customerData.customerInsurance;
      console.log(this.insuranceDetail)
    }
  }

  editDetails(editForm:CustomerDetails){
    // let customerAddressInfo = new CustomerAddress(editForm.customerAddress.address,editForm.customerAddress.city,editForm.customerAddress.state,editForm.customerAddress.pinCode);
    // let insuranceInfo= new Insurance(editForm.insurance.insuranceId,editForm.insurance.insuranceType,editForm.insurance.insuranceCategory,editForm.insurance.coveragePeriod,editForm.insurance.amount)
    // let customerInfo = new CustomerDetails(editForm.customerId,editForm.customerName,editForm.phone,editForm.status, editForm.occupation,editForm.gender,editForm.pan,
    //   editForm.nationality, editForm.annualIncome,editForm.maritalStatus,editForm.dob,editForm.mobileNo,editForm.emailId,customerAddressInfo,insuranceInfo)
     this.service.updateCustomerDetail(editForm).subscribe(()=>
    { console.log("Data")}
     );
   //this.router.navigate(['/customerList'])
   console.log(editForm)
  }
}
