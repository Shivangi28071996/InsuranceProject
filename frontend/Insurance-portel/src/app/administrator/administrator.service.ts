import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import {Observable } from 'rxjs'
import { CustomerDetails } from './customerlist/customerList'
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AdministratorService {

  constructor(private http: HttpClient) {}
  
  getCustomerListUrl="http://10.28.55.22:8090/getAllCustomer";
  getCustomerList():Observable<CustomerDetails[]>{
    return this.http.get(this.getCustomerListUrl)
         .pipe(map((res:Response) => <CustomerDetails[]><unknown>res.json()))
  }
}
