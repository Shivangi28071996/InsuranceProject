import { Component, OnInit } from '@angular/core';
import {AdministratorService} from '../../administrator/administrator.service';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { InsuranceDetails } from '../../administrator/insurancelist/insuranceList';

@Component({
  selector: 'app-selectinsurance',
  templateUrl: './selectinsurance.component.html',
  styleUrls: ['./selectinsurance.component.css']
})
export class SelectinsuranceComponent implements OnInit {
  insuranceData:InsuranceDetails[];
  vehicleInsurance:InsuranceDetails[]=[];
  homeInsurance:InsuranceDetails[]=[];
  lifeInsurance:InsuranceDetails[]=[];
  customerId:String;

  constructor(private service:AdministratorService, private router:Router,private route:ActivatedRoute ) { }

  ngOnInit() {

    this.service.getInsuranceList().subscribe((data:InsuranceDetails[]) =>{this.insuranceData = data;this.getInsuranceDetails();
                                                                                                        
    });
   
  }
  getInsuranceDetails(){
   
    for(let i=0;i<this.insuranceData.length;i++){
      if(this.insuranceData[i].insuranceType=="Vehicle Insurance"){
       
        this.vehicleInsurance.push(this.insuranceData[i]);
      }
      else if(this.insuranceData[i].insuranceType=="Home Insurance"){
        
        this.homeInsurance.push(this.insuranceData[i]);
      }
      else if(this.insuranceData[i].insuranceType=="Life Insurance"){
        
        this.lifeInsurance.push(this.insuranceData[i]);
      }
    }
  }
  addNewInsurance(insuranceData:InsuranceDetails){
    this.router.navigate(['customerDashboard/addNewInsuranceByCustomer',insuranceData.insuranceId]);
          
  }
}
