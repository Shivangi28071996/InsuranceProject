import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse,HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import {AdministratorService} from '../administrator/administrator.service'
import {CustomerDetails} from '../administrator/customerlist/customerList';
import {environment} from '../../environments/environment';
import {CustomerInsurance} from '../Customer/add-new-insurance-by-customer/addNewInsurance';
import{UpdatePassword} from '../Customer/update-password/updatePassword'
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url = environment.baseUrl;
 
  constructor(private http: HttpClient, private service:AdministratorService) { }


getCutomerDetailById() {

     let getCustomerByIdUrl =  this.url+"/getCustomerById";
    return this.http.get(getCustomerByIdUrl);
}

deactiveAccount():Observable<Number>{
  let deactiveAccount = this.url+"/deActivateCustomerAccount/";

  return this.http.delete<Number>(deactiveAccount);
}

updateCustomerDetails(customerDetails:CustomerDetails):Observable<Number>{
  let updateCustomer = `${this.url}/updateCustomerDetailByCustomer`;
   return this.http.put<Number>(updateCustomer,customerDetails);
}

addNewInsurance(customerInsurance:CustomerInsurance):Observable<CustomerInsurance>{
  let addNewInsurance = this.url+"/addInsurance/";
  
   return this.http.put<CustomerInsurance>(addNewInsurance,customerInsurance);
}
updatePassword(updateCustomerPassword:UpdatePassword){
  let updateCustomerPasswordUrl = `${this.url}/updatePassword`
  
   return this.http.put<CustomerInsurance>(updateCustomerPasswordUrl,updateCustomerPassword);

}

}




  

