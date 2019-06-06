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
 url = environment.baseUrl;
 
  constructor(private http: HttpClient) { }
 
   getAllCustomer(){
      let getCustomerListUrl = `${this.url}/getAllCustomer`;
      return this.http.get(getCustomerListUrl);
    
  }
  getToken(loginCstomer:LoginCstomer){
    //console.log("Login Service ",loginCstomer);
    let getCustomerListUrl1 = `${this.url}/token`;
  //   let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  // let options=  {
  //      headers:httpHeaders
  // };
  const httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'http://localhost:4200',
      'Content-Type':  'application/json',
   })
  };
    return this.http.post(getCustomerListUrl1,loginCstomer,httpOptions);
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

// loginDetails(){
   
// let getCustomerListUrl1 = `${this.url}/customer/loginCustomer`;
//  let userId = {"username ":localStorage.getItem("userId"),"token":localStorage.getItem("currentUser")};
//  console.log("username "+localStorage.getItem("userId"),"Token"+localStorage.getItem("currentUser"));

//  const httpOptions = {
//   headers: new HttpHeaders({
//     'Access-Control-Allow-Origin':'http://localhost:4200',
//   'Content-Type':  'application/json', 
//   'Authorization': "Bearer " + localStorage.getItem("currentUser")
//  })
// };

// console.log(headers_object);

// console.log("httpOptions========"+httpOptions)
// return this.http.post(getCustomerListUrl1,userId,httpOptions);
// }

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
