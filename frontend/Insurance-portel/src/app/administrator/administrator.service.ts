import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse, HttpHeaders } from '@angular/common/http';
import {RequestOptions,Headers} from '@angular/http';
import { Observable, Subject } from 'rxjs';
import { CustomerDetails, CustomerInsurance } from './customerlist/customerList'
import { map } from 'rxjs/operators';
import{InsuranceDetails} from '../administrator/insurancelist/insuranceList'
import {environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AdministratorService {
 
  constructor(private http: HttpClient) {}
 
  url = environment.baseUrl;

  getCustomerList(){
    let getCustomerListUrl = `${this.url}/getAllCustomer`;
    return this.http.get(getCustomerListUrl);
  }

  getInsuranceList(){
    let getInsuranceListUrl = `${this.url}/getAllInsuranceDetails`;
    return this.http.get(getInsuranceListUrl);
  }
  
  getCutomerDetailById(customerId: String) {

    let getCustomerByIdUrl = `${this.url}/getCustomerDetailById/`+customerId;
   
    return this.http.get(getCustomerByIdUrl);

}
getInsuranceDetailsById(insuranceId:String):Observable<InsuranceDetails>{
  let getInsuranceById = `${this.url}/getInsuranceDetailById/`;
  return this.http.get<InsuranceDetails>(getInsuranceById + insuranceId);
}
updateCustomerDetail(customerData:CustomerDetails):Observable<Number>{
  let updateCustomer = `${this.url}/updateCustomerDetailByAdministrator`;
 
   let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
   let options=  {
        headers:httpHeaders
   };
   return this.http.put<Number>(updateCustomer+ "/"+customerData.customerId,JSON.stringify(customerData),options);
}
updateInsuranceDetail(insuranceData:InsuranceDetails):Observable<Number>{

let updateInsurance = `${this.url}/updateInsuranceDetail`;
let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
let options=  {
  headers:httpHeaders
};
return this.http.put<Number>(updateInsurance+ "/" +insuranceData.insuranceId,JSON.stringify(insuranceData),options);

}
deleteCustomer(customerId:String):Observable<Number>{
  let deleteCustomer = this.url+"/deleteCustomerAccount/"+customerId;
  let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  return this.http.delete<Number>(deleteCustomer);
}
activateCustomerAccount(customerId:String):Observable<Number>{
  let activateCustomerAccountUrl = this.url+"/activateCustomerAccount/"+customerId;
  let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
let options=  {
  headers:httpHeaders
};
  return this.http.put<Number>(activateCustomerAccountUrl,options);
}
addNewInsurance(insuranceData:InsuranceDetails):Observable<InsuranceDetails>{
  
  let addNewInsurance = this.url+"/createNewInsurance";
  let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  let options=  {
       headers:httpHeaders
  };
   return this.http.post<InsuranceDetails>(addNewInsurance,insuranceData,options);

}
deleteInsurance(insuranceId:String):Observable<Number>{
  let deleteInsurance = this.url+"/deleteInsuranceDetail/"+insuranceId;
  let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  return this.http.delete<Number>(deleteInsurance);
}

private extractData(res:Response) {
  let body = res.json();
  return body || [];
}



private handleError(error:any) {
  // In a real world app, we might use a remote logging infrastructure
  // We'd also dig deeper into the error to get a better message
  let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
  console.error(errMsg); // log to console instead
  return Observable.throw(errMsg);
}
}
