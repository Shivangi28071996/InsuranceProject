import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router'; 
import { NgForm } from '@angular/forms';
import{LoginCstomer} from './loginCustomer';
import {LoginserviceService} from './loginservice.service';
import { from } from 'rxjs';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
  
})
export class LoginformComponent implements OnInit {
  loginCstomer:LoginCstomer;
  customerId:any;
  customerDetils:[];
  message:String;
  ckeck:boolean;
  constructor(private router: Router,private service:LoginserviceService,private Auth:AuthService) { }

  ngOnInit() {
      
}
    
   
   formSubmit(form:NgForm){
     this.loginCstomer=form.value
     
    //  if(form.value.username==="admin001" && form.value.password==="admin123"){
    //   this.router.navigate(['/adminview'])
    //   this.Auth.setLoggedIn(true);
    // } 
    if(form.value.username === "admin001" && form.value.password === "admin123"){
      localStorage.setItem('currentUser',form.value.username);
      this.router.navigate(['/adminview'])
   }

   else{
           this.service.loginDetails(this.loginCstomer).subscribe(
              data => console.log('success', data),
              error => {this.customerId= error.error.text;
                     this.checkCustomer();    
                 });
   }
   }

   checkCustomer(){
     
     if(this.customerId ==="Not Found"){

       this.message = "Username or Password are incorrect!"
     }
       
     else if(this.customerId ==="Deactivate"){
      
      this.message = "Your Account is Deactivated!"
    }

     else{
      localStorage.setItem('currentUser',this.customerId);
      this.router.navigate(['/customerDashboard'])
      
     }  

   }  
}
