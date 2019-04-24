import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insurancelist',
  templateUrl: './insurancelist.component.html',
  styleUrls: ['./insurancelist.component.css']
})
export class InsurancelistComponent implements OnInit {
  insuranceData:any;
  constructor() { }

  ngOnInit() {
    this.insuranceList();
  }
  insuranceList(){
    this.insuranceData =  [
      {
      "insuranceType": "Vehicle",
      "insuranceCategory": "Car",
      "insuranceId": "df454gfg",
      "coveragePeriod": "1",
      "amount": "15000"
      },
      {
        "insuranceType": "Life",
        "insuranceCategory": "Bike",
        "insuranceId": "fgf4545",
        "coveragePeriod": "1",
        "amount": "15000"
        },
        {
          "insuranceType": "Vehicle",
          "insuranceCategory": "Car",
          "insuranceId": "fdgf4545",
          "coveragePeriod": "1",
          "amount": "15000"
          },
      
      
      ];
  }

}
