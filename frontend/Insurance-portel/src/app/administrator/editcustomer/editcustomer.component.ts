import { Component, OnInit,Injectable } from '@angular/core';
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

@Injectable()
export class EditcustomerComponent implements OnInit {

  customerData:any
  customerAddress:String
  insuranceDetail:CustomerInsurance[];
  insuranceList:boolean=false;
  contactDetails:boolean=false;
  personalDetails:boolean=false;
  customerDetail:CustomerDetails;
  updateCustomer = new UpdateCustomerDetails();
  tokenId:String;
  message = '';
  constructor(private router:Router,private route:ActivatedRoute,private service :AdministratorService) { }

  ngOnInit() {
    this.tokenId = sessionStorage.getItem('customerToken');
      this.service.getCutomerDetailById(this.tokenId).subscribe(customerData => { this.customerData = customerData;
                                                                                          this.contactDetails=true;
                                                                                          this.personalDetails=true;
                                                                                          // this.customedsfrData();
                                                                                          this.getInsuranceDetail()});
      


  }
// customedsfrData(){
//  // console.log("fgfgdgfdgdgg",this.customerData)
// }
  getInsuranceDetail(){
    if(this.customerData.customerInsurance.length>0){
      this.insuranceList=true;
      this.insuranceDetail=this.customerData.customerInsurance;
      //console.log(this.insuranceDetail)
    }
  }

  editDetails(editForm:CustomerDetails){
   // console.log(editForm)

    // let customerAddressInfo = new CustomerAddress(editForm.customerAddress.address,editForm.customerAddress.city,editForm.customerAddress.state,editForm.customerAddress.pinCode);
    // let insuranceInfo= new Insurance(editForm.insurance.insuranceId,editForm.insurance.insuranceType,editForm.insurance.insuranceCategory,editForm.insurance.coveragePeriod,editForm.insurance.amount)
    // let customerInfo = new CustomerDetails(editForm.customerId,editForm.customerName,editForm.phone,editForm.status, editForm.occupation,editForm.gender,editForm.pan,
    //   editForm.nationality, editForm.annualIncome,editForm.maritalStatus,editForm.dob,editForm.mobileNo,editForm.emailId,customerAddressInfo,insuranceInfo)
   
     this.service.updateCustomerDetail(editForm).subscribe( 
       data => console.log('success', data),
       error => { this.message = error.error.text;
        this.router.navigate(['/adminview/customerList']);

       });
  
   //this.router.navigate(['/customerList'])
   
  }
}
