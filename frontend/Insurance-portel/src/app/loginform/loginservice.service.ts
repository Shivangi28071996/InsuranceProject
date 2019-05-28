import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {RequestOptions,Headers} from '@angular/http';
import { Observable, Subject } from 'rxjs';
import {LoginCstomer} from './loginCustomer';
import{CustomerDetails} from '../administrator/customerlist/customerList';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  //url = "http://13.233.110.112:8090";
 url = environment.baseUrl;
 
  constructor(private http: HttpClient) { }
 
   getAllCustomer(){
      let getCustomerListUrl = `${this.url}/getAllCustomer`;
      return this.http.get(getCustomerListUrl);
    
  }
  loginDetails(loginCstomer:LoginCstomer){
    //console.log("Login Service ",loginCstomer);
    let getCustomerListUrl1 = `${this.url}/loginCustomer`;
    let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  let options=  {
       headers:httpHeaders
  };
    return this.http.post(getCustomerListUrl1,loginCstomer,options);
  }

  registerCustomer( customerDetails:CustomerDetails):Observable<String>{
    
    let getCustomerListUrl1 = `${this.url}/createCustomer`;
    let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    let options=  {
       headers:httpHeaders
  };
     return this.http.post<String>(getCustomerListUrl1,customerDetails,options);
  }


logout(){
    localStorage.removeItem('currentUser');
  }

  
}
