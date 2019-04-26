import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { CustomerDetails } from './customerlist/customerList'
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AdministratorService {

  constructor(private http: HttpClient) {}
  
  getCustomerListUrl="http://ec2-13-234-169-116.ap-south-1.compute.amazonaws.com:8090/getAllCustomer";
  getCustomerByIdUrl="http://ec2-13-234-169-116.ap-south-1.compute.amazonaws.com:8090/getCustomerDetailById/";
  getInsuranceListUrl="http://ec2-13-234-169-116.ap-south-1.compute.amazonaws.com:8090/getAllInsuranceDetails";

  
  getCustomerList(){
    return this.http.get(this.getCustomerListUrl);
  }

  getInsuranceList(){
    return this.http.get(this.getInsuranceListUrl);
  }
  
  getCutomerDetailById(customerId: String) {
    return this.http.get(this.getCustomerByIdUrl + customerId );
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
