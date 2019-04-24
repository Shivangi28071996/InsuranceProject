import { Component, OnInit } from '@angular/core';
import {AdminatorLoginComponent} from '../adminator-login/adminator-login.component';
import {AdministratorService} from '../administrator.service'
import { CustomerDetails } from './customerList'
@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css'],
  providers: [AdministratorService]
})
export class CustomerlistComponent implements OnInit {
  customerData:CustomerDetails[];

  constructor() { }

  ngOnInit() {
    this.sampleFunction();
  }

  sampleFunction() {
    this.customerData =  [
      {
      "CustomerId": "1234",
      "CustomerName": "Ram",
      "PhoneNo": "9424058878",
      "Status": "Active"
      },
      {
        "CustomerId": "12345",
        "CustomerName": "Ram",
        "PhoneNo": "9424058878",
        "Status": "Active"
        },
        {
          "CustomerId": "12345",
          "CustomerName": "Ram",
          "PhoneNo": "9424058878",
          "Status": "Active"
          },
      
      ];
   
   
  }

}
