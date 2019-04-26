import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { CustomerDetail } from './customerdetails/customerDetail'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getCustomerDetailUrl="http://ec2-13-234-169-116.ap-south-1.compute.amazonaws.com:8090/getAllCustomer";

  getCutomerDetailById(username: number) {
    return this.http.get(this.getCustomerDetailUrl + username);
}
}




  

