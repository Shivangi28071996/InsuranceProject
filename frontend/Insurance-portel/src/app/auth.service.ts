import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { LoginCstomer } from './loginform/loginCustomer';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { LoginserviceService } from './loginform/loginservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = environment.baseUrl;
  loggedInStatus = false;
 
  constructor(private http: HttpClient,private router: Router,private loginService:LoginserviceService) { }

  // setLoggedIn(value:boolean){
  //     this.loggedInStatus = value;
  // }
  
  // get isLoggedIn(){
  //   return this.loggedInStatus;
  // }

  login(loginCstomer:LoginCstomer){
 // console.log(loginCstomer)
    // if(loginCstomer.customerId === "admin001" && loginCstomer.password === "admin123"){
    //    localStorage.setItem('currentUser',String(loginCstomer.customerId));
    //    return true;
    // }
         this.loginService.loginDetails(loginCstomer);


    
  }

  // logout(){
  //   localStorage.removeItem('currentUser');
  // }


  getUserDetails(loginCstomer:LoginCstomer) {
    
    let getCustomerListUrl1 = `${this.url}/loginCustomer`;
    let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  let options=  {
       headers:httpHeaders
  };
    return this.http.post(getCustomerListUrl1,loginCstomer,options)

  }
  
}
