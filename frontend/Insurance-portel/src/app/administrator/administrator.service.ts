import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse, HttpHeaders } from '@angular/common/http';
import {RequestOptions,Headers} from '@angular/http';
import { Observable, of, Subject } from 'rxjs';
import { CustomerDetails } from './customerlist/customerList'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdministratorService {
 
  constructor(private http: HttpClient) {}
  url = "http://10.28.55.22:8090";
  // getCustomerListUrl="http://10.28.55.22:8090/deActivateCustomerAccount";
  url1 = "http://10.28.55.22:8090/deleteCustomerAccount"
  getCustomerByIdUrl="http://10.28.55.22:8090/getCustomerDetailById/";
  getInsuranceListUrl="http://10.28.55.22:8090/getAllInsuranceDetails";
  private updateCustomer="http://10.28.55.22:8090/updateCustomerDetailByAdministrator";
  
  getCustomerList(){
    let getCustomerListUrl = `${this.url}/getAllCustomer`;
    return this.http.get(getCustomerListUrl);
  }

  getInsuranceList(){
    return this.http.get(this.getInsuranceListUrl);
  }
  
  getCutomerDetailById(customerId: String) {
    return this.http.get(this.getCustomerByIdUrl + customerId );

}
updateCustomerDetail(customerData:CustomerDetails):Observable<Number>{
 // console.log("Customer data"+JSON.stringify(customerData))
   let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
   let options=  {
        headers:httpHeaders
   };
   return this.http.put<Number>(this.updateCustomer+ "/"+customerData.customerId,JSON.stringify(customerData),options);
}
deleteCustomer(customerId:String):Observable<Number>{
  let deleteCustomer = this.url+"/deleteCustomerAccount/"+customerId;
  let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  return this.http.delete<Number>(deleteCustomer);
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
