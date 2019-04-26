import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router'; 
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
  
})
export class LoginformComponent implements OnInit {
  formValue:any;
  constructor(private router: Router) { }

  ngOnInit() {
  }
    
   
   formSubmit(form:NgForm){
    this.formValue=form.value;
    console.log(this.formValue.username)
    if(this.formValue.username=="admin001"){
      this.router.navigate(['/customerList'])
    }
    else if(this.formValue.username=="cust001"){
      this.router.navigate(['customerdetails',this.formValue.username])
    }
   }
}
