export class CustomerDetails{
    customerId:String;
    customerName:String;
    phone:any
    status:String;
    occupation:String;
    gender:String;
    pan:String;
    nationality:String;
    annualIncome:String;
    maritalStatus:String;
    dob:String;
    mobileNo:any;
    emailId:String;
    customerAddress:CustomerAddress
    insurance:CustomerInsurance[]

constructor(customerId:String,customerName:String,phone:any,status:String, occupation:String,gender:String,pan:String,
    nationality:String, annualIncome:String,maritalStatus:String,dob:String,mobileNo:any,emailId:String,customerAddress:CustomerAddress, insurance:CustomerInsurance[]){
    this.customerId=customerId;
    this.customerName=customerName;
    this.phone=phone;
    this.status=status;
    this.occupation=occupation;
    this.gender=gender;
    this.pan=pan;
    this.nationality=nationality;
    this.annualIncome=annualIncome;
    this.maritalStatus=maritalStatus;
    this.dob=dob;
    this.mobileNo=mobileNo;
    this.emailId=emailId;
    this.customerAddress=customerAddress
    this. insurance=insurance
}
}

export class CustomerAddress{
    address:String
    city:String
    state:String
    pinCode:String

constructor( address:String,city:String,state:String,pinCode:String){
   this.address=address
   this.city=city
   this.state=state
   this.pinCode=pinCode
     
}
}
export class CustomerInsurance{
    insuranceId:String
    insuranceType:String
    insuranceCategory:String
    coveragePeriod:String
    amount:String
    constructor(insuranceId:String,insuranceType:String,insuranceCategory:String,coveragePeriod:String,     amount:String){
        this.insuranceId=insuranceId
        this.insuranceType=insuranceType
        this.insuranceCategory=insuranceCategory
        this.coveragePeriod=coveragePeriod
        this.amount=amount
    }
}