import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute, Params} from '@angular/router';
import {CustomerService} from '../customer.service';
import {CustomerDetail} from './customerDetail'

@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.css'],
  providers: [CustomerService]
})

export class CustomerdetailsComponent implements OnInit {
  customerDetail:any;

  constructor(private router:Router,private route:ActivatedRoute,private service :CustomerService) { }

  ngOnInit() {
    this.route.params.subscribe(params=> {
      this.service.getCutomerDetailById(params['customerId']).subscribe(customerDetail => this.customerDetail = customerDetail);
  });
  console.log(this.customerDetail.customerId)
  }
  addNewInsurance(){
      this.router.navigate(['insuranceoffer'])
  }

}
