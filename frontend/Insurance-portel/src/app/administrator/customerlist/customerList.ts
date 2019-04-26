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

constructor(CustomerId:String,CustomerName:String,PhoneNo:any,Status:String, occupation:String,gender:String,pan:String,
    nationality:String, annualIncome:String,maritalStatus:String,dob:String,mobileNo:any,emailId:String){
    this.customerId=CustomerId;
    this.customerName=CustomerName;
    this.phone=PhoneNo;
    this.status=Status;
    this.occupation=occupation;
    this.gender=gender;
    this.pan=pan;
    this.nationality=nationality;
    this.annualIncome=annualIncome;
    this.maritalStatus=maritalStatus;
    this.dob=dob;
    this.mobileNo=mobileNo;
    this.emailId=emailId;
}
}