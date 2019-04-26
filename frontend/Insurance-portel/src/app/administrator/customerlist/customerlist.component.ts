import { Component, OnInit } from '@angular/core';
import {AdminatorLoginComponent} from '../adminator-login/adminator-login.component';
import {AdministratorService} from '../administrator.service'
import { CustomerDetails } from './customerList'
import { Router } from '@angular/router';
@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css'],
  providers: [AdministratorService]
})
export class CustomerlistComponent implements OnInit {
  customerData:{};

  constructor(private service:AdministratorService,private router:Router ) { }

  ngOnInit() {
    this.service.getCustomerList().subscribe(data => this.customerData = data);
  }
  goToCustomerDetails(customerDetail:CustomerDetails){
    this.router.navigate(['editcustomer', customerDetail.customerId])
  }
}
