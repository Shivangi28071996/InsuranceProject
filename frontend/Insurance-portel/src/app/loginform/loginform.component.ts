import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router'; 
import { NgForm } from '@angular/forms';
import{LoginCstomer} from './loginCustomer';
import {LoginserviceService} from './loginservice.service';





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
  errorStatus:number;
  constructor(private router: Router,private service:LoginserviceService) { }

  ngOnInit() {
      
}
    
   
   formSubmit(form:NgForm){
     this.loginCstomer=form.value
     localStorage.setItem("userId",form.value.username)
    if(form.value.username === "admin001" && form.value.password === "admin123"){
      localStorage.setItem('currentUser',form.value.username);
      this.router.navigate(['/adminview'])
   }

  //  else{
  //          this.service.getToken(this.loginCstomer).subscribe(
  //             data => console.log('success', data),
  //             error => {this.customerId= error.error.text;
  //                     this.errorStatus= error.status;   
  //                    this.checkCustomer();    
              
  //                });
                 
  //  }
  
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
       console.log("Not Found======",this.customerId)

       this.message = "Username or Password are incorrect!"
     }
       
     else if(this.customerId ==="Deactivate"){
      console.log("Deactivate ======",this.customerId)
      this.message = "Your Account is Deactivated!"
    }
    
    else if(this.errorStatus == 0){
        
      this.router.navigate(['/error'])
    }

     else
     {
      
      
      localStorage.setItem('currentUser',this.customerId);
        //this.service.loginDetails().subscribe();
        this.router.navigate(['/customerDashboard'])
     }  

   }  
}
 