import { Component, OnInit } from '@angular/core';
import {AdministratorService} from '../administrator.service'

@Component({
  selector: 'app-insurancelist',
  templateUrl: './insurancelist.component.html',
  styleUrls: ['./insurancelist.component.css'],
  providers: [AdministratorService]
})
export class InsurancelistComponent implements OnInit {
  insuranceData:{};
  constructor(private service:AdministratorService ) { }

  ngOnInit() {
    this.service.getInsuranceList().subscribe(data => this.insuranceData = data);
  }
  
}
