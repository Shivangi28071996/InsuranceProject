import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse,HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import {AdministratorService} from '../administrator/administrator.service'
import {CustomerDetails} from '../administrator/customerlist/customerList';
import {environment} from '../../environments/environment';
import {CustomerInsurance} from '../Customer/add-new-insurance-by-customer/addNewInsurance';
import{UpdatePassword} from '../Customer/update-password/updatePassword'
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  //url = "http://13.233.110.112:8090";
  url = environment.baseUrl;
 
  constructor(private http: HttpClient, private service:AdministratorService) { }

  getCutomerDetailById(username: String) {
  
   return  this.service.getCutomerDetailById(username);
    
}

deactiveAccount(customerId:String):Observable<Number>{
  let deactiveAccount = this.url+"/deActivateCustomerAccount/"+customerId;
  console.log(deactiveAccount)
  let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  return this.http.delete<Number>(deactiveAccount);
}

updateCustomerDetails(customerDetails:CustomerDetails):Observable<Number>{

  let updateCustomer = `${this.url}/updateCustomerDetailByCustomer`;
  let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
   let options=  {
        headers:httpHeaders
   };
   return this.http.put<Number>(updateCustomer+ "/"+customerDetails.customerId,JSON.stringify(customerDetails),options);
}

addNewInsurance(customerInsurance:CustomerInsurance,customerId:String):Observable<CustomerInsurance>{
  let addNewInsurance = this.url+"/addInsurance/"+customerId ;
  let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  let options=  {
       headers:httpHeaders
  };
   return this.http.put<CustomerInsurance>(addNewInsurance,customerInsurance,options);
}
updatePassword(updateCustomerPassword:UpdatePassword,customerId:String){
  let updateCustomerPasswordUrl = this.url+"/updatePassword/"+customerId ;
  let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  let options=  {
       headers:httpHeaders
  };
   return this.http.put<CustomerInsurance>(updateCustomerPasswordUrl,updateCustomerPassword,options);

}

}




  

